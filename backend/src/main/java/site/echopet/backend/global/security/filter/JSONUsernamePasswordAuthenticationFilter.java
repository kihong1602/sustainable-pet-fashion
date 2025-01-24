package site.echopet.backend.global.security.filter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.PrivateKey;
import java.util.Objects;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import site.echopet.backend.api.auth.domain.RSAPrivateKey;
import site.echopet.backend.global.encrypt.RSADecryptor;
import site.echopet.backend.global.encrypt.RSAUtils;
import site.echopet.backend.global.redis.RSAKeyClient;
import site.echopet.backend.global.security.handler.LoginFailureHandler;
import site.echopet.backend.global.security.handler.LoginSuccessHandler;
import site.echopet.backend.global.utils.JSONUtils;

@Component
public class JSONUsernamePasswordAuthenticationFilter extends AbstractAuthenticationProcessingFilter {

  private static final String LOGIN_URL = "/api/auth/login";

  private static final AntPathRequestMatcher LOGIN_REQUEST_MATCHER = new AntPathRequestMatcher(LOGIN_URL, HttpMethod.POST.name());

  private final JSONUtils jsonUtils;

  private final RSAKeyClient keyClient;

  protected JSONUsernamePasswordAuthenticationFilter(AuthenticationManager authenticationManager,
      LoginSuccessHandler loginSuccessHandler, LoginFailureHandler loginFailureHandler,
      JSONUtils jsonUtils, RSAKeyClient keyClient) {
    super(LOGIN_REQUEST_MATCHER, authenticationManager);
    setAuthenticationSuccessHandler(loginSuccessHandler);
    setAuthenticationFailureHandler(loginFailureHandler);
    this.jsonUtils = jsonUtils;
    this.keyClient = keyClient;
  }

  @Override
  public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
      throws AuthenticationException, IOException, ServletException {

    String contentType = request.getContentType();
    validateContentType(contentType);

    LoginData loginData = jsonUtils.deserializedJsonToObject(request.getInputStream(), LoginData.class);

    Authentication authRequest = validateLoginData(loginData);

    return super.getAuthenticationManager().authenticate(authRequest);
  }

  private void validateContentType(final String requestContentType) {
    if (Objects.isNull(requestContentType) || !requestContentType.equals(MediaType.APPLICATION_JSON_VALUE)) {
      throw new RuntimeException("추후 예외처리 예정");
    }
  }

  private Authentication validateLoginData(LoginData loginData) {
    if (loginData.hasText()) {
      RSAPrivateKey findKey = keyClient.findBy(loginData.key);
      PrivateKey privateKey = RSAUtils.stringToPrivateKey(findKey.getPrivateKey());
      String decryptPassword = RSADecryptor.decrypt(loginData.password, privateKey);
      keyClient.deleteBy(loginData.key);
      return new UsernamePasswordAuthenticationToken(loginData.email, decryptPassword);
    }
    throw new RuntimeException("추후 예외처리 예정");
  }

  private record LoginData(
      String email,
      String password,
      String key
  ) {

    public boolean hasText() {
      return StringUtils.hasText(email) && StringUtils.hasText(password) && StringUtils.hasText(key);
    }
  }
}
