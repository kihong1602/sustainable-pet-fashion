package site.echopet.backend.api.order.domain;

import static jakarta.persistence.FetchType.LAZY;
import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.api.design.domain.Design;
import site.echopet.backend.api.pet.domain.Pet;
import site.echopet.backend.api.shipment.domain.ShipmentInfo;
import site.echopet.backend.global.converter.OrderStatusConverter;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class Order extends BaseEntity {

  private Boolean isRecycle;

  private Integer totalAmount;

  @Convert(converter = OrderStatusConverter.class)
  private OrderStatus orderStatus;

  @ManyToOne(fetch = LAZY)
  private Design design;

  @ManyToOne(fetch = LAZY)
  private Pet pet;

  @ManyToOne(fetch = LAZY)
  private ShipmentInfo shipmentInfo;
}