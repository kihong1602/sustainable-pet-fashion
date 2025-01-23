package site.echopet.backend.api.order.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MaterialType {
  
  RECYCLE("고객 제공 의류"),
  SERVICE("서비스 제공 소재");

  private final String description;
}