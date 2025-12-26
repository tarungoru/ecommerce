package com.example.Ecommerce.auth.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.nio.file.attribute.UserPrincipal;
import java.util.Date;

@Component
public class TokenProvider {

    private final String SECRET = "mySuperSecretKey123456789";

    public String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(System.currentTimeMillis() + 30L * 24 * 60 * 60 * 1000)
                )
                .signWith(SignatureAlgorithm.HS256, SECRET)
                .compact();
    }
}
