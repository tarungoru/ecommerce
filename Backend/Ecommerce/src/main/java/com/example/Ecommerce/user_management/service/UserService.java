package com.example.Ecommerce.user_management.service;

import com.example.Ecommerce.user_management.bean.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    User saveUser(User user);

}
