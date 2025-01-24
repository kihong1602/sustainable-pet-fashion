package site.echopet.backend.global.encrypt;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class RSAKeyGenerator {

  private static final String ALGORITHM = "RSA";

  private static final int keySize = 2048;

  public static KeyPair generateKeyPair() {
    try {
      KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance(ALGORITHM);
      keyPairGenerator.initialize(keySize);
      return keyPairGenerator.generateKeyPair();
    } catch (Exception e) {
      throw new RuntimeException("추후 예외처리 예정");
    }
  }

}