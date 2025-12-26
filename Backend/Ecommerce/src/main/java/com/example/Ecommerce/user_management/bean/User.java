package com.example.Ecommerce.user_management.bean;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class User {

    private Integer id;

    private String username;

    private String password;

    private String mobileNo;

    private List<String> roles;

    private Date lastLogin;
}
