package site.echopet.backend.global.converter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import site.echopet.backend.api.custom.domain.CustomOptionType;

@Converter
public class CustomOptionTypeConverter implements AttributeConverter<CustomOptionType, String> {

  @Override
  public String convertToDatabaseColumn(CustomOptionType customOptionType) {
    return customOptionType.name();
  }

  @Override
  public CustomOptionType convertToEntityAttribute(String s) {
    return CustomOptionType.valueOf(s);
  }
}
