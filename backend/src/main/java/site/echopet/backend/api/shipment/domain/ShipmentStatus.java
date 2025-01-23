package site.echopet.backend.api.shipment.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ShipmentStatus {

  PENDING("배송 대기"),
  READY("출고 준비"),
  IN_TRANSIT("물류 이동"),
  OUT_FOR_DELIVERY("배송 출발"),
  DELIVERED("배송 완료"),
  RETURNED("반품"),
  CANCELED("배송 취소");

  private final String description;

}