package site.echopet.backend.global.converter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import site.echopet.backend.api.auth.domain.Role;

@Converter
public class RoleConverter implements AttributeConverter<Role, String> {

  @Override
  public String convertToDatabaseColumn(Role role) {
    return role.name();
  }

  @Override
  public Role convertToEntityAttribute(String s) {
    return Role.valueOf(s);
  }
}
