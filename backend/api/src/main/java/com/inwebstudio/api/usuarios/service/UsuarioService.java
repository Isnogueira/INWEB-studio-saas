package com.inwebstudio.api.usuarios.service;

import com.inwebstudio.api.common.enums.Perfil;
import com.inwebstudio.api.exception.DuplicateResourceException;
import com.inwebstudio.api.exception.ResourceNotFoundException;
import com.inwebstudio.api.usuarios.dto.CreateUsuarioRequest;
import com.inwebstudio.api.usuarios.dto.UpdateUsuarioRequest;
import com.inwebstudio.api.usuarios.dto.UsuarioResponse;
import com.inwebstudio.api.usuarios.entity.Usuario;
import com.inwebstudio.api.usuarios.mapper.UsuarioMapper;
import com.inwebstudio.api.usuarios.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final UsuarioMapper usuarioMappper;
    private final PasswordEncoder passwordEncoder;

    public UsuarioResponse create(CreateUsuarioRequest request) {

        if (usuarioRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateResourceException("E-mail já cadastrado.");
        }

        Usuario usuario = usuarioMappper.toEntity(request);

        usuario.setSenha(passwordEncoder.encode(request.getSenha()));
        usuario.setPerfil(Perfil.CLIENTE);
        usuario.setAtivo(true);
        usuario.setEmail_verificado(true);
        usuario.setCriado_em(LocalDateTime.now());
        usuario.setAtualizado_em(LocalDateTime.now());


        Usuario savedUsuario = usuarioRepository.save(usuario);

        return usuarioMappper.toResponse(savedUsuario);
    }

    public List<UsuarioResponse> findAll() {

        return usuarioRepository.findAll()
                .stream()
                .map(usuarioMappper::toResponse)
                .toList();
    }

    public UsuarioResponse findById(UUID id) {

        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado."));

        return usuarioMappper.toResponse(usuario);
    }

    public UsuarioResponse update(UUID id, UpdateUsuarioRequest request) {

        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado."));

        usuario.setNome(request.getNome());
        usuario.setEmail(request.getEmail());
        usuario.setAtualizado_em(LocalDateTime.now());

        Usuario updatedUsuario = usuarioRepository.save(usuario);

        return usuarioMappper.toResponse(updatedUsuario);
    }

    public void delete(UUID id) {

        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado."));

        usuarioRepository.delete(usuario);
    }

}
