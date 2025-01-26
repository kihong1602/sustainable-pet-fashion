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

  private String type;

  private String breed;

  private String gender;

  private Float neckCircum;

  private Float bodyLength;

  private Float chestCircum;

  private Float waistCircum;

  private String image;

  private String memo;

  @ManyToOne(fetch = LAZY)
  private Account account;

}