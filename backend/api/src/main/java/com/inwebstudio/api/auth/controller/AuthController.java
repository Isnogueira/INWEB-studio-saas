package com.inwebstudio.api.auth.controller;

import com.inwebstudio.api.auth.dto.LoginRequest;
import com.inwebstudio.api.auth.dto.LoginResponse;
import com.inwebstudio.api.auth.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
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

}
