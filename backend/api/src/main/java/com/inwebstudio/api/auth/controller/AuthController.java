package com.inwebstudio.api.auth.controller;

import com.inwebstudio.api.auth.dto.AuthUserResponse;
import com.inwebstudio.api.auth.dto.LoginRequest;
import com.inwebstudio.api.auth.dto.LoginResponse;
import com.inwebstudio.api.auth.service.AuthService;
import com.inwebstudio.api.usuarios.dto.UsuarioResponse;
import com.inwebstudio.api.usuarios.entity.Usuario;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse>  login(

            @Valid

            @RequestBody

            LoginRequest request

    ){
        LoginResponse response = authService.login(request);

        return ResponseEntity.ok(response);
    }


    @GetMapping("/me")
    public ResponseEntity<AuthUserResponse> me(
            @AuthenticationPrincipal Usuario usuario
    ) {

        return ResponseEntity.ok(
                new AuthUserResponse(
                        usuario.getId(),
                        usuario.getNome(),
                        usuario.getEmail(),
                        usuario.getPerfil()
                )
        );
    }


}
