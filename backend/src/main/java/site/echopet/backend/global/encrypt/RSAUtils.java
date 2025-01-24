package site.echopet.backend.global.encrypt;

import java.security.Key;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.EncodedKeySpec;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class RSAUtils {

  private static final String ALGORITHM = "RSA";

  public static String keyToString(Key key) {
    return Base64.getEncoder().encodeToString(key.getEncoded());
  }

  public static PrivateKey stringToPrivateKey(String keyString) {
    try {
      byte[] keyBytes = Base64.getDecoder().decode(keyString);
      PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
      return (PrivateKey) stringToKey(keySpec);
    } catch (Exception e) {
      throw new RuntimeException();
    }
  }

  public static PublicKey stringToPublicKey(String keyString) {
    try {
      byte[] keyBytes = Base64.getDecoder().decode(keyString);
      X509EncodedKeySpec keySpec = new X509EncodedKeySpec(keyBytes);
      return (PublicKey) stringToKey(keySpec);
    } catch (Exception e) {
      throw new RuntimeException();
    }
  }

  private static Key stringToKey(EncodedKeySpec keySpec) throws Exception {
    KeyFactory keyFactory = KeyFactory.getInstance(ALGORITHM);
    if (keySpec instanceof PKCS8EncodedKeySpec pkcs8KeySpec) {
      return keyFactory.generatePrivate(pkcs8KeySpec);
    } else if (keySpec instanceof X509EncodedKeySpec x509KeySpec) {
      return keyFactory.generatePublic(x509KeySpec);
    }
    throw new RuntimeException("추후 예외처리 예정");
  }

}