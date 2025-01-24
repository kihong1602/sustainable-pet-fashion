package site.echopet.backend.global.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.io.InputStream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JSONUtils {

  private final ObjectMapper objectMapper;

  public <T> T deserializedJsonToObject(InputStream inputStream, Class<T> clazz) {
    try {
      return objectMapper.readValue(inputStream, clazz);
    } catch (IOException e) {
      throw new RuntimeException("추후 예외처리 예정");
    }
  }

  public String serializedObjectToJson(Object obj) {
    try {
      return objectMapper.writeValueAsString(obj);
    } catch (JsonProcessingException e) {
      throw new RuntimeException("추후 예외처리 예정");
    }
  }

}