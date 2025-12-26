package com.example.Ecommerce.user_management.service.impl;

import com.example.Ecommerce.user_management.bean.User;
import com.example.Ecommerce.user_management.entity.UserEntity;
import com.example.Ecommerce.user_management.repo.UserRepository;
import com.example.Ecommerce.user_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return null;
    }
}
