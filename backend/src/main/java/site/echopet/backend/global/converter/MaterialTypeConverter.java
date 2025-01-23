package site.echopet.backend.global.converter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import site.echopet.backend.api.order.domain.MaterialType;

@Converter
public class MaterialTypeConverter implements AttributeConverter<MaterialType, String> {

  @Override
  public String convertToDatabaseColumn(MaterialType materialType) {
    return materialType.name();
  }

  @Override
  public MaterialType convertToEntityAttribute(String s) {
    return MaterialType.valueOf(s);
  }
}
