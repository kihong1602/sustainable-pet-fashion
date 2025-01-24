package site.echopet.backend.global.redis;

import java.time.Duration;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import site.echopet.backend.api.auth.domain.RSAPrivateKey;

@Component
@RequiredArgsConstructor
public class RSAKeyClient implements RedisClient<RSAPrivateKey> {

  private static final long TTL = 3L;
  private final RedisTemplate<String, RSAPrivateKey> redisTemplate;

  @Override
  public void save(String key, RSAPrivateKey value) {
    key = PRIVATE_KEY_PREFIX + key;
    redisTemplate.opsForValue().set(key, value, Duration.ofHours(TTL));
  }

  @Override
  public RSAPrivateKey findBy(String key) {
    RSAPrivateKey value = redisTemplate.opsForValue().get(PRIVATE_KEY_PREFIX + key);
    return Optional.ofNullable(value).orElseThrow(RuntimeException::new);
  }

  @Override
  public void deleteBy(String key) {
    redisTemplate.delete(PRIVATE_KEY_PREFIX + key);
  }

}