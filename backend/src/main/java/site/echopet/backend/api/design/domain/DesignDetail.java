package site.echopet.backend.api.design.domain;

import static jakarta.persistence.FetchType.LAZY;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DesignDetail extends BaseEntity {

  private String description;

  private String content;

  @OneToOne(fetch = LAZY)
  private Design design;

}