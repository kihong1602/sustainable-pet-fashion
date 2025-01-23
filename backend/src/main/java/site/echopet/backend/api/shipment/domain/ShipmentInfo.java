package site.echopet.backend.api.shipment.domain;

import static jakarta.persistence.FetchType.LAZY;
import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.api.auth.domain.Account;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class ShipmentInfo extends BaseEntity {

  private String name;

  private String tel;

  private String address;

  private String addressDetail;

  private String zipcode;

  private Boolean isDefault;

  @ManyToOne(fetch = LAZY)
  private Account account;

}