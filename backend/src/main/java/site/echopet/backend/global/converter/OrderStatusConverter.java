package site.echopet.backend.global.converter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import site.echopet.backend.api.order.domain.OrderStatus;

@Converter
public class OrderStatusConverter implements AttributeConverter<OrderStatus, String> {

  @Override
  public String convertToDatabaseColumn(OrderStatus orderStatus) {
    return orderStatus.name();
  }

  @Override
  public OrderStatus convertToEntityAttribute(String s) {
    return OrderStatus.valueOf(s);
  }

}