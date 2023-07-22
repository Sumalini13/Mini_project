package com.iamneo.security.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.iamneo.security.dto.request.AuthenticationRequest;
import com.iamneo.security.dto.request.RegisterRequest;
import com.iamneo.security.dto.response.AuthenticationResponse;
import com.iamneo.security.entity.Role;
import com.iamneo.security.entity.User;
import com.iamneo.security.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository = null;
    private final PasswordEncoder passwordEncoder = null;
    private final JwtService jwtService = new JwtService();
    private final AuthenticationManager authenticationManager = null;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = ((Object) User
                .builder())
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save((Iterable<S>) user);
        var jwtToken = jwtService.generateToken(user);
        return ((Object) AuthenticationResponse.builder())
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(((Object) request).getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

}
