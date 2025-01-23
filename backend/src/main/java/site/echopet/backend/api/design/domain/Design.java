package site.echopet.backend.api.design.domain;

import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class Design extends BaseEntity {

  private String name;

  private String image;

  private Integer price;

  private Integer viewCount;

}