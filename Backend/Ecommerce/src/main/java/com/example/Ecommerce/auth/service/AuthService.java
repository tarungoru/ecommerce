package com.example.Ecommerce.auth.service;

import com.example.Ecommerce.auth.bean.LoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {

    ResponseEntity<String> authenticateUser(LoginRequest loginRequest);

}
