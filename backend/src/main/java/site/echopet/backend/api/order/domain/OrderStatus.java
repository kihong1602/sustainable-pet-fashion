package site.echopet.backend.api.order.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum OrderStatus {

  CONFIRM("주문 확인"),
  PRODUCTION("제작 진행"),
  INSPECTION("검수 진행"),
  DELIVERY("배송");

  private final String description;
}