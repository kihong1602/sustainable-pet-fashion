package site.echopet.backend.global.security.auth;

import java.util.Collection;
import java.util.Collections;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import site.echopet.backend.api.auth.domain.Account;

@Getter
public class PrincipalDetails implements UserDetails {

  private String email;

  private Collection<? extends GrantedAuthority> authorities;

  private PrincipalDetails(String email, Collection<? extends GrantedAuthority> authorities) {
    this.email = email;
    this.authorities = authorities;
  }

  public static PrincipalDetails create(Account account) {
    String roleKey = account.getRole().getKey();
    Collection<? extends GrantedAuthority> authorities = Collections.singleton(new SimpleGrantedAuthority(roleKey));
    return new PrincipalDetails(account.getEmail(), authorities);
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  @Override
  public String getPassword() {
    return null;
  }

  @Override
  public String getUsername() {
    return email;
  }

}