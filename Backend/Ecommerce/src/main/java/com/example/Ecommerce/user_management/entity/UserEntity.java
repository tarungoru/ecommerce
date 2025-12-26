package com.example.Ecommerce.user_management.entity;

import com.example.Ecommerce.audit.Entity.AuditEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity(name = "user")
@Getter
@Setter
public class UserEntity extends AuditEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    @Column(unique = true)
    private String email;

    private Integer mobileNo;

    private String password;

    private List<String> roles;
}
