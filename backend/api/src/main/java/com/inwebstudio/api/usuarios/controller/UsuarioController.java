package com.inwebstudio.api.usuarios.controller;

import com.inwebstudio.api.usuarios.dto.CreateUsuarioRequest;
import com.inwebstudio.api.usuarios.dto.UpdateUsuarioRequest;
import com.inwebstudio.api.usuarios.dto.UsuarioResponse;
import com.inwebstudio.api.usuarios.service.UsuarioService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
public class UsuarioController {

    private final UsuarioService userService;

    @PostMapping
    public ResponseEntity<UsuarioResponse> create(@Valid @RequestBody CreateUsuarioRequest request) {

      UsuarioResponse response =  userService.create(request);

        return ResponseEntity.ok(response) ;

    }

    @GetMapping
    public ResponseEntity<List<UsuarioResponse>> findAll() {

        List<UsuarioResponse> responseList = userService.findAll();

        return ResponseEntity.ok(responseList);

    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioResponse> findById(@PathVariable UUID id) {

        UsuarioResponse response = userService.findById(id);

        return ResponseEntity.ok(response);

    }

    @PutMapping("/{id}")
    public ResponseEntity<UsuarioResponse> update(
            @PathVariable UUID id,
            @Valid @RequestBody UpdateUsuarioRequest request) {

        UsuarioResponse response = userService.update(id, request);

        return ResponseEntity.ok(response);

    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {

        userService.delete(id);

    }

}