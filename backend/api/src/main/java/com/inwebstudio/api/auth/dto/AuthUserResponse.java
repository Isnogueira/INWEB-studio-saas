package com.inwebstudio.api.auth.dto;

import com.inwebstudio.api.common.enums.Perfil;

import java.util.UUID;

//Record para resposta imutável
public record AuthUserResponse(
        UUID id,
        String nome,
        String email,
        Perfil perfil
) {
}
