package com.inwebstudio.api.usuarios.controller;

import com.inwebstudio.api.usuarios.dto.CreateUsuarioRequest;
import com.inwebstudio.api.usuarios.dto.UpdateUsuarioRequest;
import com.inwebstudio.api.usuarios.dto.UsuarioResponse;
import com.inwebstudio.api.usuarios.service.UsuarioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UsuarioService userService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UsuarioResponse create(@Valid @RequestBody CreateUsuarioRequest request) {

        return userService.create(request);

    }

    @GetMapping
    public List<UsuarioResponse> findAll() {

        return userService.findAll();

    }

    @GetMapping("/{id}")
    public UsuarioResponse findById(@PathVariable UUID id) {

        return userService.findById(id);

    }

    @PutMapping("/{id}")
    public UsuarioResponse update(
            @PathVariable UUID id,
            @Valid @RequestBody UpdateUsuarioRequest request) {

        return userService.update(id, request);

    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {

        userService.delete(id);

    }

}