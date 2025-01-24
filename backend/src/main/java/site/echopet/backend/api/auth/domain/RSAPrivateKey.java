package site.echopet.backend.api.auth.domain;

import java.security.PrivateKey;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.global.encrypt.RSAUtils;

@Getter
@NoArgsConstructor
public class RSAPrivateKey {

  private String privateKey;

  public RSAPrivateKey(PrivateKey privateKey) {
    this.privateKey = RSAUtils.keyToString(privateKey);
  }

}