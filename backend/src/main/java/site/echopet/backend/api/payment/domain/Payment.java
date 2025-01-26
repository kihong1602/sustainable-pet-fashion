package site.echopet.backend.api.payment.domain;

import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.api.order.domain.Orders;
import site.echopet.backend.global.converter.PaymentStatusConverter;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class Payment extends BaseEntity {

  @Convert(converter = PaymentStatusConverter.class)
  private PaymentStatus paymentStatus;

  private String paymentKey;

  private String orderId;

  private Integer amount;

  private String token;

  @OneToOne(fetch = FetchType.LAZY)
  private Orders orders;

}