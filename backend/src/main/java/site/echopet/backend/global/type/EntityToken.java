package site.echopet.backend.global.type;

import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;

@RequiredArgsConstructor
public enum EntityToken {

  DESIGN("Design_");

  private static final int TOKEN_LENGTH = 30;
  private final String prefix;

  public String createEntityToken() {
    return prefix + randomCharacter(TOKEN_LENGTH - prefix.length());
  }

  public String extractToken(String token) {
    return token.substring(prefix.length());
  }

  public String identifyToken(String tokenValue) {
    return prefix + tokenValue;
  }

  public String randomCharacter(int length) {
    return RandomStringUtils.randomAlphanumeric(length);
  }
}