package com.example.Ecommerce.auth.bean;

import lombok.Data;

@Data
public class LoginRequest {

    private String email;

    private String password;
}
