package site.echopet.backend.api.auth.domain.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import site.echopet.backend.api.auth.domain.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

  Optional<Account> findByEmail(String email);

  boolean existsByEmail(String email);

}