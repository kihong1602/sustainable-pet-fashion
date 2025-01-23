package site.echopet.backend.api.shipment.domain;

import static jakarta.persistence.FetchType.LAZY;
import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.api.order.domain.Order;
import site.echopet.backend.global.converter.ShipmentStatusConverter;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class Shipment extends BaseEntity {

  private LocalDateTime shippingDate;

  private LocalDateTime deliveryDate;

  @Convert(converter = ShipmentStatusConverter.class)
  private ShipmentStatus shipmentStatus;

  private String shipmentCompany;

  private String trackingUrl;

  @OneToOne(fetch = LAZY)
  private Order order;

}