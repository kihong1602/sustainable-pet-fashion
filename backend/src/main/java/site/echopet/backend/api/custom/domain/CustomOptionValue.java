package site.echopet.backend.api.custom.domain;

import static jakarta.persistence.FetchType.LAZY;
import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class CustomOptionValue extends BaseEntity {

  private String value;

  private Integer price;

  private String image; // 미리보기에 사용할 이미지 URL

  @ManyToOne(fetch = LAZY)
  private CustomOption customOption;

}