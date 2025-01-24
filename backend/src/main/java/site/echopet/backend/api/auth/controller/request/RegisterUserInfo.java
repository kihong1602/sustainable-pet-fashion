package site.echopet.backend.api.auth.controller.request;

public record RegisterUserInfo(
    String email,
    String password,
    String key
) {

}