package site.echopet.backend.api.order.domain;

import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class ServiceMaterial extends BaseEntity {

  private String name;

  private String description;

  private Integer price;

  private Boolean isAvailable;

}