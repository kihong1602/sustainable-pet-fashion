package site.echopet.backend.global.security.handler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import site.echopet.backend.global.jwt.GenerateToken;
import site.echopet.backend.global.jwt.TokenService;
import site.echopet.backend.global.security.auth.PrincipalDetails;
import site.echopet.backend.global.utils.CookieManager;

@Component
@RequiredArgsConstructor
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

  private static final String REDIRECT_URL = "http://localhost/login-success"; // 추후 변경
  private final TokenService tokenService;

  @Override
  public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
      throws IOException, ServletException {
    GenerateToken tokens = generateToken(authentication);
    CookieManager.storeTokenInCookie(tokens, response);
    response.sendRedirect(REDIRECT_URL);
    clearSession(request);
  }

  private GenerateToken generateToken(Authentication authentication) {
    PrincipalDetails user = (PrincipalDetails) authentication.getPrincipal();
    String email = user.getUsername();
    String authorities = user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));
    return tokenService.createJWT(email, authorities);
  }

  private void clearSession(HttpServletRequest request) {
    SecurityContextHolder.clearContext();
    HttpSession session = request.getSession(false);
    if (Objects.nonNull(session)) {
      session.invalidate();
    }
  }
}
