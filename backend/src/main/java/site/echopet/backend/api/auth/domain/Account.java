package site.echopet.backend.api.auth.domain;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Builder.Default;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.echopet.backend.global.converter.RoleConverter;
import site.echopet.backend.global.type.BaseEntity;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Account extends BaseEntity {

  private String email;

  private String password;

  private String nickname;

  private String profileImage;

  @Default
  @Convert(converter = RoleConverter.class)
  private Role role = Role.USER;

  private Account(String email, String password, String nickname, String profileImage, Role role) {
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.profileImage = profileImage;
    this.role = role;
  }

  public void updateNickname(String nickname) {
    this.nickname = nickname;
  }

  public void updateProfileImage(String profileImage) {
    this.profileImage = profileImage;
  }

}