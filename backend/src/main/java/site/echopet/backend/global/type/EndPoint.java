package site.echopet.backend.global.type;

import org.springframework.http.HttpMethod;

public record EndPoint(
    String pattern,
    HttpMethod method
) {

}