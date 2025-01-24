package site.echopet.backend.global.security.config;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import site.echopet.backend.global.security.handler.CustomLogoutHandler;
import site.echopet.backend.global.security.handler.CustomLogoutSuccessHandler;

@Getter
@Configuration
@RequiredArgsConstructor
public class SecurityHandlerConfig {

  private final CustomLogoutHandler logoutHandler;
  private final CustomLogoutSuccessHandler logoutSuccessHandler;
}