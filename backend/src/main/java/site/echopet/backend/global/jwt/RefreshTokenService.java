package site.echopet.backend.global.jwt;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import site.echopet.backend.global.redis.RefreshTokenClient;

@Service
@RequiredArgsConstructor
public class RefreshTokenService {

  private final RefreshTokenClient refreshTokenClient;

  public void save(RefreshToken refreshToken) {
    refreshTokenClient.save(refreshToken.getEmail(), refreshToken);
  }

  public RefreshToken findRefreshTokenBy(String email) {
    return refreshTokenClient.findBy(email);
  }

  public void removeRefreshToken(String email) {
    refreshTokenClient.deleteBy(email);
  }

}