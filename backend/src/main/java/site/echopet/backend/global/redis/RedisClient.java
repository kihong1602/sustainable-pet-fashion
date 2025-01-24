package site.echopet.backend.global.redis;

public interface RedisClient<V> {

  String PRIVATE_KEY_PREFIX = "RSAKey:";
  String REFRESH_TOKEN_PREFIX = "RefreshToken:";

  void save(String key, V value);

  V findBy(String key);

  void deleteBy(String key);

}