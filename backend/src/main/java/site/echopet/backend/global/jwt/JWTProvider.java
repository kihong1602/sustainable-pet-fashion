package site.echopet.backend.global.jwt;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.Base64;
import javax.crypto.SecretKey;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import site.echopet.backend.global.type.JWTValidationResult;
import site.echopet.backend.global.utils.DateUtils;

@Component
@RequiredArgsConstructor
public class JWTProvider {

  private static final long ACCESS_TOKEN_EXPIRE_TIME = 30L;
  private static final long REFRESH_TOKEN_EXPIRE_TIME = 60L * 24 * 7;
  private static final String AUTHORITIES_KEY = "ROLE";

  @Value("${secret.jwt}")
  private String key;
  private SecretKey secretKey;
  private JwtParser jwtParser;

  @PostConstruct
  public void init() {
    this.secretKey = Keys.hmacShaKeyFor(Base64.getDecoder().decode(key));
    this.jwtParser = Jwts.parser().verifyWith(secretKey).build();
  }

  public GenerateToken generateToken(String email, String authorities) {
    String accessToken = createToken(email, authorities, ACCESS_TOKEN_EXPIRE_TIME);
    String refreshToken = createToken(email, authorities, REFRESH_TOKEN_EXPIRE_TIME);
    return new GenerateToken(accessToken, new RefreshToken(email, refreshToken));
  }

  public JWTValidationResult verifyToken(String token) {
    try {
      jwtParser.parseSignedClaims(token);
      return JWTValidationResult.VALID;
    } catch (ExpiredJwtException e) {
      return JWTValidationResult.EXPIRED;
    } catch (Exception e) {
      return JWTValidationResult.INVALID;
    }
  }

  public String getEmail(String token) {
    try {
      return jwtParser.parseSignedClaims(token).getPayload().getSubject();
    } catch (ExpiredJwtException e) {
      return e.getClaims().getSubject();
    }
  }

  public String getAuthorities(String token) {
    return jwtParser.parseSignedClaims(token).getPayload().get(AUTHORITIES_KEY, String.class);
  }

  private String createToken(String email, String authorities, long expireTime) {
    LocalDateTime now = LocalDateTime.now();
    LocalDateTime expiredDate = now.plusMinutes(expireTime);

    return Jwts.builder()
               .subject(email)
               .claim(AUTHORITIES_KEY, authorities)
               .issuedAt(DateUtils.localDateTimeToDate(now))
               .expiration(DateUtils.localDateTimeToDate(expiredDate))
               .signWith(secretKey)
               .compact();
  }

}
