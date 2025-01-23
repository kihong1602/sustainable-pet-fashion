package site.echopet.backend.api.custom.domain;

import static jakarta.persistence.FetchType.LAZY;
import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.api.design.domain.Design;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class DesignCustomOption extends BaseEntity {

  @ManyToOne(fetch = LAZY)
  private Design design;

  @ManyToOne(fetch = LAZY)
  private CustomOption customOption;

}