package com.inwebstudio.api.users.service;

import com.inwebstudio.api.users.dto.CreateUserRequest;
import com.inwebstudio.api.users.dto.UpdateUserRequest;
import com.inwebstudio.api.users.dto.UserResponse;
import com.inwebstudio.api.users.entity.Usuario;
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

        Usuario usuario = userMapper.toEntity(request);

        Usuario savedUsuario = userRepository.save(usuario);

        return userMapper.toResponse(savedUsuario);
    }

    public List<UserResponse> findAll() {

        return userRepository.findAll()
                .stream()
                .map(userMapper::toResponse)
                .toList();
    }

    public UserResponse findById(UUID id) {

        Usuario usuario = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

        return userMapper.toResponse(usuario);
    }

    public UserResponse update(UUID id, UpdateUserRequest request) {

        Usuario usuario = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

        usuario.setName(request.getName());
        usuario.setEmail(request.getEmail());

        Usuario updatedUsuario = userRepository.save(usuario);

        return userMapper.toResponse(updatedUsuario);
    }

    public void delete(UUID id) {

        Usuario usuario = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

        userRepository.delete(usuario);
    }

}
