package site.echopet.backend.api.design.domain.repository.custom;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import site.echopet.backend.api.design.controller.response.GetDesignSimpleInfo;

public interface CustomDesignRepository {

  Slice<GetDesignSimpleInfo> findDesignBy(String keyword, String category, Pageable pageable);

}