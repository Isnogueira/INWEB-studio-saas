package com.inwebstudio.api.users.mapper;

import com.inwebstudio.api.users.dto.CreateUserRequest;
import com.inwebstudio.api.users.dto.UpdateUserRequest;
import com.inwebstudio.api.users.dto.UserResponse;
import com.inwebstudio.api.users.entity.Usuario;
import org.springframework.stereotype.Component;

@Component
public class  UserMapper {

    public Usuario toEntity(CreateUserRequest request) {

        return Usuario.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .build();

    }

    public UserResponse toResponse(Usuario usuario) {

        return UserResponse.builder()
                .id(usuario.getId())
                .name(usuario.getName())
                .email(usuario.getEmail())
                .active(usuario.getActive())
                .createdAt(usuario.getCreatedAt())
                .build();

    }


    public void updateEntity(UpdateUserRequest request, Usuario usuario) {
        usuario.setName(request.getName());
        usuario.setEmail(request.getEmail());
    }

}