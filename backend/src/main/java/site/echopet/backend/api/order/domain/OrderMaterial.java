package site.echopet.backend.api.order.domain;

import static jakarta.persistence.FetchType.LAZY;
import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.global.converter.MaterialTypeConverter;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class OrderMaterial extends BaseEntity {

  @Convert(converter = MaterialTypeConverter.class)
  private MaterialType type;

  private Long materialId;

  @ManyToOne(fetch = LAZY)
  private Order order;
  
}