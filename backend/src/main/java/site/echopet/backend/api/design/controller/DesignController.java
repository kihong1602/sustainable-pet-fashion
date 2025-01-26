package site.echopet.backend.api.design.controller;

import static org.springframework.data.domain.Sort.Direction.ASC;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import site.echopet.backend.api.design.controller.response.GetDesignSimpleInfo;
import site.echopet.backend.api.design.service.DesignService;

@RestController
@RequestMapping("/api/designs")
@RequiredArgsConstructor
public class DesignController {

  private final DesignService designService;

  @GetMapping
  public ResponseEntity<Slice<GetDesignSimpleInfo>> getDesigns(
      @PageableDefault(size = 16, sort = "name", direction = ASC) Pageable pageable,
      @RequestParam(name = "keyword", required = false) String keyword,
      @RequestParam(name = "category", required = false) String category) {

    Slice<GetDesignSimpleInfo> designSimpleInfos = designService.getDesignSimpleInfos(keyword, category, pageable);
    return ResponseEntity.ok(designSimpleInfos);
  }

}