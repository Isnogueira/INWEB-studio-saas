package com.inwebstudio.api.users.controller;

import com.inwebstudio.api.users.dto.CreateUserRequest;
import com.inwebstudio.api.users.dto.UpdateUserRequest;
import com.inwebstudio.api.users.dto.UserResponse;
import com.inwebstudio.api.users.service.UserService;
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

    private final UserService userService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse create(@Valid @RequestBody CreateUserRequest request) {

        return userService.create(request);

    }

    @GetMapping
    public List<UserResponse> findAll() {

        return userService.findAll();

    }

    @GetMapping("/{id}")
    public UserResponse findById(@PathVariable UUID id) {

        return userService.findById(id);

    }

    @PutMapping("/{id}")
    public UserResponse update(
            @PathVariable UUID id,
            @Valid @RequestBody UpdateUserRequest request) {

        return userService.update(id, request);

    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {

        userService.delete(id);

    }

}