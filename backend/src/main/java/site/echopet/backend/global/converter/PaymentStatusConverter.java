package site.echopet.backend.global.converter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import site.echopet.backend.api.payment.domain.PaymentStatus;

@Converter
public class PaymentStatusConverter implements AttributeConverter<PaymentStatus, String> {

  @Override
  public String convertToDatabaseColumn(PaymentStatus paymentStatus) {
    return paymentStatus.name();
  }

  @Override
  public PaymentStatus convertToEntityAttribute(String s) {
    return PaymentStatus.valueOf(s);
  }
}
