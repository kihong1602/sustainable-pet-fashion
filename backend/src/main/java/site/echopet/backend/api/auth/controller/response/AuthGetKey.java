package site.echopet.backend.api.auth.controller.response;

public record AuthGetKey(
    String redisKey,
    String publicKey
) {

}