package com.inwebstudio.api.users.service;

import com.inwebstudio.api.users.dto.CreateUserRequest;
import com.inwebstudio.api.users.dto.UpdateUserRequest;
import com.inwebstudio.api.users.dto.UserResponse;
import com.inwebstudio.api.users.entity.User;
import com.inwebstudio.api.users.mapper.UserMapper;
import com.inwebstudio.api.users.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserResponse create(CreateUserRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("E-mail já cadastrado.");
        }

        User user = userMapper.toEntity(request);

        User savedUser = userRepository.save(user);

        return userMapper.toResponse(savedUser);
    }

    public List<UserResponse> findAll() {

        return userRepository.findAll()
                .stream()
                .map(userMapper::toResponse)
                .toList();
    }

    public UserResponse findById(UUID id) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

        return userMapper.toResponse(user);
    }

    public UserResponse update(UUID id, UpdateUserRequest request) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        User updatedUser = userRepository.save(user);

        return userMapper.toResponse(updatedUser);
    }

    public void delete(UUID id) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

        userRepository.delete(user);
    }

}
