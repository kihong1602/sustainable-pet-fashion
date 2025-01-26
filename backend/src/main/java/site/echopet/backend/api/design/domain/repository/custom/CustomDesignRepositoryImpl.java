package site.echopet.backend.api.design.domain.repository.custom;

import static com.querydsl.core.group.GroupBy.groupBy;
import static com.querydsl.core.group.GroupBy.list;
import static site.echopet.backend.api.design.domain.QCategory.category;
import static site.echopet.backend.api.design.domain.QDesign.design;
import static site.echopet.backend.api.design.domain.QDesignCategory.designCategory;
import static site.echopet.backend.api.design.domain.QDesignSize.designSize;
import static site.echopet.backend.api.design.domain.QDesignTag.designTag;
import static site.echopet.backend.api.design.domain.QSize.size;
import static site.echopet.backend.api.design.domain.QTag.tag;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;
import site.echopet.backend.api.design.controller.response.GetDesignSimpleInfo;
import site.echopet.backend.api.design.domain.Design;
import site.echopet.backend.global.utils.QueryDslUtils;

@Repository
@RequiredArgsConstructor
public class CustomDesignRepositoryImpl implements CustomDesignRepository {

  private final JPAQueryFactory queryFactory;

  @Override
  public Slice<GetDesignSimpleInfo> findDesignBy(String keyword, String categoryName, Pageable pageable) {

    BooleanBuilder booleanBuilder = new BooleanBuilder();
    if (StringUtils.hasText(keyword)) {
      booleanBuilder.and(design.name.containsIgnoreCase(keyword));
    }

    if (StringUtils.hasText(categoryName)) {
      booleanBuilder.and(category.name.eq(categoryName));
    }

    List<Design> designs = queryFactory.selectFrom(design)
                                       .leftJoin(designCategory).on(design.id.eq(designCategory.design.id))
                                       .leftJoin(category).on(category.id.eq(designCategory.category.id))
                                       .where(booleanBuilder)
                                       .orderBy(QueryDslUtils.createOrderSpecifier(pageable.getSort(), Design.class,
                                           design))
                                       .offset(pageable.getOffset())
                                       .limit(pageable.getPageSize())
                                       .fetch();

    List<Long> designIds = designs.stream().map(Design::getId).toList();

    Map<Long, List<String>> designTags = queryFactory.from(designTag).join(tag).on(designTag.tag.id.eq(tag.id))
                                                     .where(designTag.design.id.in(designIds))
                                                     .transform(groupBy(designTag.design.id).as(list(tag.name)));

    Map<Long, List<String>> designSizes = queryFactory.from(designSize).join(size).on(designSize.size.id.eq(size.id))
                                                      .where(designSize.design.id.in(designIds))
                                                      .transform(groupBy(designSize.design.id).as(list(size.name)));

    Map<Long, List<String>> designCategories = queryFactory.from(designCategory)
                                                           .join(category)
                                                           .on(designCategory.category.id.eq(category.id))
                                                           .where(designCategory.design.id.in(designIds))
                                                           .transform(groupBy(designCategory.design.id).as(list(category.name)));

    List<GetDesignSimpleInfo> results = designs.stream()
                                               .map(design -> new GetDesignSimpleInfo(
                                                   design.getName(),
                                                   design.getImage(),
                                                   design.getPrice(),
                                                   designCategories.getOrDefault(design.getId(), Collections.emptyList()),
                                                   designTags.getOrDefault(design.getId(), Collections.emptyList()),
                                                   designSizes.getOrDefault(design.getId(), Collections.emptyList())
                                               )).toList();

    boolean hasNext = results.size() > pageable.getPageSize();

    if (hasNext) {
      results = results.subList(0, pageable.getPageSize());
    }
    return new SliceImpl<>(results, pageable, hasNext);
  }
}