package site.echopet.backend.global.security.config;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import site.echopet.backend.global.security.filter.JSONUsernamePasswordAuthenticationFilter;
import site.echopet.backend.global.type.EndPoint;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

  private final SecurityFilterConfig filterConfig;
  private final SecurityHandlerConfig handlerConfig;

  private final List<EndPoint> permitAllEndPoints = List.of(
      new EndPoint("/api/auth/rsa-key", HttpMethod.GET),
      new EndPoint("/api/auth/register", HttpMethod.POST),
      new EndPoint("/api/auth/login", HttpMethod.POST),
      new EndPoint("/api/designs/**", HttpMethod.GET)
  );

  @Bean
  public SecurityFilterChain apiSecurityFilterChain(HttpSecurity http) throws Exception {
    http.csrf(AbstractHttpConfigurer::disable)
        .cors(AbstractHttpConfigurer::disable)
        .formLogin(AbstractHttpConfigurer::disable);

    http.sessionManagement(config ->
        config.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

    http.logout(logoutConfigurer -> logoutConfigurer
        .logoutUrl("/api/auth/logout")
        .addLogoutHandler(handlerConfig.getLogoutHandler())
        .logoutSuccessHandler(handlerConfig.getLogoutSuccessHandler()));

    http.addFilterBefore(filterConfig.getUsernamePasswordAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
        .addFilterBefore(filterConfig.getJwtAuthenticationFilter(), JSONUsernamePasswordAuthenticationFilter.class);

    return http.build();
  }


  private void configureApiEndPoints(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(registry -> {
      permitAllEndPoints.forEach(endPoint -> registry.requestMatchers(endPoint.method(), endPoint.pattern()).permitAll());
      registry.anyRequest().authenticated();
    });
  }

}