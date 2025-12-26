package com.example.Ecommerce.user_management.controller;

import com.example.Ecommerce.user_management.bean.User;
import com.example.Ecommerce.user_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/save")
    public User saveUser(@RequestBody final User user) {
        return userService.saveUser(user);
    }
}
