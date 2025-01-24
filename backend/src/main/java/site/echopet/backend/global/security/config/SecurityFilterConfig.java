package site.echopet.backend.global.security.config;

import lombok.Getter;
import org.springframework.context.annotation.Configuration;
import site.echopet.backend.global.jwt.TokenService;
import site.echopet.backend.global.security.filter.JSONUsernamePasswordAuthenticationFilter;
import site.echopet.backend.global.security.filter.JWTAuthenticationFilter;

@Getter
@Configuration
public class SecurityFilterConfig {

  private final JSONUsernamePasswordAuthenticationFilter usernamePasswordAuthenticationFilter;

  private final JWTAuthenticationFilter jwtAuthenticationFilter;

  public SecurityFilterConfig(JSONUsernamePasswordAuthenticationFilter usernamePasswordAuthenticationFilter,
      TokenService tokenService) {
    this.usernamePasswordAuthenticationFilter = usernamePasswordAuthenticationFilter;
    this.jwtAuthenticationFilter = new JWTAuthenticationFilter(tokenService);
  }

}