package com.inwebstudio.api.users.mapper;

import com.inwebstudio.api.users.dto.CreateUserRequest;
import com.inwebstudio.api.users.dto.UpdateUserRequest;
import com.inwebstudio.api.users.dto.UserResponse;
import com.inwebstudio.api.users.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public User toEntity(CreateUserRequest request) {

        return User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .build();

    }

    public UserResponse toResponse(User user) {

        return UserResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .active(user.getActive())
                .createdAt(user.getCreatedAt())
                .build();

    }


    public void updateEntity(UpdateUserRequest request, User user) {
        user.setName(request.getName());
        user.setEmail(request.getEmail());
    }

}