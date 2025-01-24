package site.echopet.backend.api.auth.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import site.echopet.backend.api.auth.controller.request.RegisterUserInfo;
import site.echopet.backend.api.auth.controller.response.AuthGetKey;
import site.echopet.backend.api.auth.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

  private final AuthService authService;

  @GetMapping("/rsa-key")
  public ResponseEntity<AuthGetKey> generateRSAKey() {
    AuthGetKey authGetKey = authService.generateRSAKey();
    return ResponseEntity.ok(authGetKey);
  }

  @PostMapping("/register")
  public ResponseEntity<?> register(@RequestBody RegisterUserInfo registerUserInfo) {
    authService.register(registerUserInfo);
    return ResponseEntity.ok().build();
  }

}