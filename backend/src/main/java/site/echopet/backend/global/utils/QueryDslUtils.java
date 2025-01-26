package site.echopet.backend.global.utils;

import static lombok.AccessLevel.PRIVATE;

import com.querydsl.core.types.EntityPath;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.SimplePath;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Sort;

@NoArgsConstructor(access = PRIVATE)
public class QueryDslUtils {

  public static <T> OrderSpecifier<?>[] createOrderSpecifier(Sort sort, Class<T> clazz, EntityPath<T> entityPath) {
    return sort.stream().map(order -> {
      Order direction = order.isAscending() ? Order.ASC : Order.DESC;
      SimplePath<T> path = Expressions.path(clazz, entityPath, order.getProperty());
      return new OrderSpecifier(direction, path);
    }).toArray(OrderSpecifier[]::new);
  }

}