package site.echopet.backend.api.order.domain;

import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class RecycleClothes extends BaseEntity {

  private String material;

  private String washStatus;

}