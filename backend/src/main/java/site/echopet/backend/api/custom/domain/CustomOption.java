package site.echopet.backend.api.custom.domain;

import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.global.converter.CustomOptionTypeConverter;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class CustomOption extends BaseEntity {

  @Convert(converter = CustomOptionTypeConverter.class)
  private CustomOptionType type;

  private String name;

}