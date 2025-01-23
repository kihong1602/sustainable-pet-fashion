package site.echopet.backend.api.custom.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CustomOptionType {

  EMBROIDERY("자수"),
  PATCH("패치"),
  NAME_TAG("이름 태그");

  private final String description;
}