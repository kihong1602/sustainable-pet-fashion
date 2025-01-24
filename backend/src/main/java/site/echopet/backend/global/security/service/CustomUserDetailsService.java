package site.echopet.backend.global.security.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import site.echopet.backend.api.auth.domain.Account;
import site.echopet.backend.api.auth.domain.repository.AccountRepository;
import site.echopet.backend.global.security.auth.PrincipalDetails;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

  private final AccountRepository accountRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Account account = accountRepository.findByEmail(username).orElseThrow(RuntimeException::new);
    return PrincipalDetails.create(account);
  }

}