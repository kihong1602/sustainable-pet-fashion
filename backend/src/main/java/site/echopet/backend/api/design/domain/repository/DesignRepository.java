package site.echopet.backend.api.design.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import site.echopet.backend.api.design.domain.Design;
import site.echopet.backend.api.design.domain.repository.custom.CustomDesignRepository;

public interface DesignRepository extends JpaRepository<Design, Long>, CustomDesignRepository {

}