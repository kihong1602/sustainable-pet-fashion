package site.echopet.backend.api.design.domain;

import static jakarta.persistence.FetchType.LAZY;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DesignSize extends BaseEntity {

  private Integer price;

  private Integer stock;

  @ManyToOne(fetch = LAZY)
  private Design design;

  @ManyToOne(fetch = LAZY)
  private Size size;

}