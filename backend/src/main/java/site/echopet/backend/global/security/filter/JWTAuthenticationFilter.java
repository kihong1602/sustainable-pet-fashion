package site.echopet.backend.global.security.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;
import site.echopet.backend.global.jwt.GenerateToken;
import site.echopet.backend.global.jwt.TokenService;
import site.echopet.backend.global.type.CookieNames;
import site.echopet.backend.global.type.EndPoint;
import site.echopet.backend.global.type.JWTValidationResult;
import site.echopet.backend.global.utils.CookieManager;

@RequiredArgsConstructor
public class JWTAuthenticationFilter extends OncePerRequestFilter {

  private final TokenService tokenService;
  private final PathMatcher pathMatcher = new AntPathMatcher();
  private final List<EndPoint> tokenFreeEndPoints = List.of(
      new EndPoint("/api/auth/rsa-key", HttpMethod.GET),
      new EndPoint("/api/auth/register", HttpMethod.POST),
      new EndPoint("/api/auth/login", HttpMethod.POST),
      new EndPoint("/api/designs/**", HttpMethod.GET)
  );

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

    if (isTokenFreeEndPoint(request)) {
      doFilter(request, response, filterChain);
      return;
    }

    String accessToken = CookieManager.getCookie(CookieNames.ACCESS_TOKEN.getName(), request);

    JWTValidationResult validationResult = tokenService.validateToken(accessToken);
    switch (validationResult) {
      case VALID -> {
        tokenService.saveAuthentication(accessToken);
        filterChain.doFilter(request, response);
      }
      case EXPIRED -> {
        String refreshToken = CookieManager.getCookie(CookieNames.REFRESH_TOKEN.getName(), request);
        refreshToken(refreshToken, response);
        filterChain.doFilter(request, response);
      }
      case INVALID -> throw new RuntimeException("추후 예외처리 예정");
    }
  }

  private boolean isTokenFreeEndPoint(HttpServletRequest request) {
    String requestUri = request.getRequestURI();
    String requestMethod = request.getMethod().toUpperCase();
    return tokenFreeEndPoints.stream().anyMatch(endPoint -> isMatches(endPoint, requestUri, requestMethod));
  }

  private boolean isMatches(EndPoint endPoint, String requestUri, String requestMethod) {
    return pathMatcher.match(endPoint.pattern(), requestUri) && endPoint.method().matches(requestMethod);
  }

  private void refreshToken(String token, HttpServletResponse response) {
    JWTValidationResult validationResult = tokenService.validateToken(token);
    if (validationResult.isNotValid()) {
      throw new RuntimeException("추후 예외처리 예정");
    }
    GenerateToken generateToken = tokenService.refreshJWT(token);
    CookieManager.storeTokenInCookie(generateToken, response);
  }
}
