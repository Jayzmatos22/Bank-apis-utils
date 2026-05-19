package com.brasilpanel.backend.controller.auth;

import com.brasilpanel.backend.dto.user.LoginRequestDTO;
import com.brasilpanel.backend.dto.user.UserRequestDTO;
import com.brasilpanel.backend.service.auth.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody @Valid UserRequestDTO dto) {
        return ResponseEntity.status(201).body(authService.registerUser(dto));
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid LoginRequestDTO dto) {
        return ResponseEntity.ok(authService.loginUser(dto));
    }
}
