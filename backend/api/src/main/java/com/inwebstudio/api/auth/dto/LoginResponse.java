package com.inwebstudio.api.auth.dto;

import com.inwebstudio.api.common.enums.Perfil;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
public class LoginResponse {

    private UUID id;

    private String token;

    private String nome;

    private String email;

    private Perfil perfil;

}
