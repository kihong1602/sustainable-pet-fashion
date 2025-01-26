package site.echopet.backend.api.design.controller.response;

import java.util.List;

public record GetDesignSimpleInfo(
    String name,
    String image,
    Integer price,
    List<String> categories,
    List<String> tags,
    List<String> size
) {

}