package site.echopet.backend.global.jwt;

public record GenerateToken(
    String accessToken,
    RefreshToken refreshToken
) {

}