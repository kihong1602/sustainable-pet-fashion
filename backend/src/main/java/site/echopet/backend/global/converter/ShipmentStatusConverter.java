package site.echopet.backend.global.converter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import site.echopet.backend.api.shipment.domain.ShipmentStatus;

@Converter
public class ShipmentStatusConverter implements AttributeConverter<ShipmentStatus, String> {

  @Override
  public String convertToDatabaseColumn(ShipmentStatus shipmentStatus) {
    return shipmentStatus.name();
  }

  @Override
  public ShipmentStatus convertToEntityAttribute(String s) {
    return ShipmentStatus.valueOf(s);
  }
}
