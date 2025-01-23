package site.echopet.backend.api.payment.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum PaymentStatus {

  SUCCEED("결제 성공"),
  FAILED("결제 실패"),
  CANCELLED("결제 취소");

  private final String description;
}