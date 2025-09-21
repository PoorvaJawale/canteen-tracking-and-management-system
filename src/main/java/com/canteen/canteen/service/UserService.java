package com.canteen.canteen.service;

import com.canteen.canteen.model.User;
import com.canteen.canteen.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Check if email exists
    public boolean existsByEmail(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

    // Save new user
    public void saveUser(User user) {
        userRepository.save(user);
    }

    // Get user by email
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
