package com.inwebstudio.api.usuarios.mapper;

import com.inwebstudio.api.usuarios.dto.CreateUsuarioRequest;
import com.inwebstudio.api.usuarios.dto.UpdateUsuarioRequest;
import com.inwebstudio.api.usuarios.dto.UsuarioResponse;
import com.inwebstudio.api.usuarios.entity.Usuario;
import org.springframework.stereotype.Component;

@Component
public class  UsuarioMapper {

    public Usuario toEntity(CreateUsuarioRequest request) {

        return Usuario.builder()
                .nome(request.getNome())
                .email(request.getEmail())
                .senha(request.getSenha())
                .build();

    }

    public UsuarioResponse toResponse(Usuario usuario) {

        return UsuarioResponse.builder()
                .id(usuario.getId())
                .nome(usuario.getNome())
                .email(usuario.getEmail())
                .ativo(usuario.getAtivo())
                .criadoEm(usuario.getCriado_em())
                .build();

    }


    public void updateEntity(UpdateUsuarioRequest request, Usuario usuario) {
        usuario.setNome(request.getNome());
        usuario.setEmail(request.getEmail());
    }

}