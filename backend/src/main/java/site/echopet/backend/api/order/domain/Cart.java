package site.echopet.backend.api.order.domain;

import static jakarta.persistence.FetchType.LAZY;
import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.api.auth.domain.Account;
import site.echopet.backend.api.design.domain.Design;
import site.echopet.backend.api.pet.domain.Pet;
import site.echopet.backend.global.converter.MaterialTypeConverter;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class Cart extends BaseEntity {

  @Convert(converter = MaterialTypeConverter.class)
  private MaterialType materialType;

  private Long materialId;

  private Integer totalAmount;

  private String token;

  @ManyToOne(fetch = LAZY)
  private Account account;

  @ManyToOne(fetch = LAZY)
  private Pet pet;

  @ManyToOne(fetch = LAZY)
  private Design design;

}