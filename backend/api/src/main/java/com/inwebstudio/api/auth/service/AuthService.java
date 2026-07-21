package com.inwebstudio.api.auth.service;

import com.inwebstudio.api.auth.dto.LoginRequest;
import com.inwebstudio.api.auth.dto.LoginResponse;
import com.inwebstudio.api.usuarios.entity.Usuario;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;



    public LoginResponse login(LoginRequest request) {

        Authentication authentication =
                authenticationManager.authenticate(

                        new UsernamePasswordAuthenticationToken(

                                request.getEmail(),

                                request.getSenha()

                        )

                );

        Usuario user =
                (Usuario) authentication.getPrincipal();

        assert user != null;
        String token =
                jwtService.generateToken(user);

        return new LoginResponse(
                token,
                user.getNome(),
                user.getEmail(),
                user.getPerfil()
        );
    }

}
