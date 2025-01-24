package site.echopet.backend.api.auth.service;

import jakarta.transaction.Transactional;
import java.security.KeyPair;
import java.security.PrivateKey;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import site.echopet.backend.api.auth.controller.request.RegisterUserInfo;
import site.echopet.backend.api.auth.controller.response.AuthGetKey;
import site.echopet.backend.api.auth.domain.Account;
import site.echopet.backend.api.auth.domain.RSAPrivateKey;
import site.echopet.backend.api.auth.domain.repository.AccountRepository;
import site.echopet.backend.global.encrypt.RSADecryptor;
import site.echopet.backend.global.encrypt.RSAKeyGenerator;
import site.echopet.backend.global.encrypt.RSAUtils;
import site.echopet.backend.global.redis.RSAKeyClient;

@Service
@RequiredArgsConstructor
public class AuthService {

  private final AccountRepository accountRepository;
  private final RSAKeyClient rsaKeyClient;
  private final BCryptPasswordEncoder passwordEncoder;

  public AuthGetKey generateRSAKey() {
    KeyPair keyPair = RSAKeyGenerator.generateKeyPair();
    String publicKey = RSAUtils.keyToString(keyPair.getPublic());
    String redisKey = UUID.randomUUID().toString();
    RSAPrivateKey rsaPrivateKey = new RSAPrivateKey(keyPair.getPrivate());
    rsaKeyClient.save(redisKey, rsaPrivateKey);
    return new AuthGetKey(redisKey, publicKey);
  }

  @Transactional
  public void register(RegisterUserInfo userInfo) {
    boolean isDuplicateEmail = accountRepository.existsByEmail(userInfo.email());
    if (isDuplicateEmail) {
      throw new RuntimeException("이메일 중복 관련 예외처리 예정");
    }
    RSAPrivateKey rsaPrivateKey = rsaKeyClient.findBy(userInfo.key());
    PrivateKey privateKey = RSAUtils.stringToPrivateKey(rsaPrivateKey.getPrivateKey());
    String decryptPassword = RSADecryptor.decrypt(userInfo.password(), privateKey);
    String password = passwordEncoder.encode(decryptPassword);
    Account account = Account.builder().email(userInfo.email()).password(password).build();
    accountRepository.save(account);
    rsaKeyClient.deleteBy(userInfo.key());
  }

}