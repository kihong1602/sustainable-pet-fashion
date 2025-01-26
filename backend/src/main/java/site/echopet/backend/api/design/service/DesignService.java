package site.echopet.backend.api.design.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.echopet.backend.api.design.controller.response.GetDesignSimpleInfo;
import site.echopet.backend.api.design.domain.repository.DesignRepository;

@Service
@RequiredArgsConstructor
public class DesignService {

  private final DesignRepository designRepository;


  @Transactional(readOnly = true)
  public Slice<GetDesignSimpleInfo> getDesignSimpleInfos(String keyword, String category, Pageable pageable) {
    return designRepository.findDesignBy(keyword, category, pageable);
  }

}