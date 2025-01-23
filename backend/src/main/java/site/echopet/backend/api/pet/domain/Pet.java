package site.echopet.backend.api.pet.domain;

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
public class Pet extends BaseEntity {

  private String name;

  private String breed;

  private Float neckCircum;

  private Float bodyLength;

  private Float bodyCircum;

  private Float legCircum;

  private Float tailCircum;

  private String color;

  private String orderRequest;

  @ManyToOne(fetch = LAZY)
  private Account account;

}