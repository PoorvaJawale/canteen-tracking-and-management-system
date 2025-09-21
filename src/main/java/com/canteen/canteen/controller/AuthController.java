package com.canteen.canteen.controller;

import com.canteen.canteen.model.Role;
import com.canteen.canteen.model.User;
import com.canteen.canteen.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService userService;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // ---------------- Registration ----------------
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        // Check if email already exists
        if (userService.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email already registered"));
        }

        // Encode password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Set default role if not provided
        if (user.getRole() == null) {
            user.setRole(Role.CUSTOMER);
        }

        // Save user
        userService.saveUser(user);

        return ResponseEntity.ok(Map.of("message", "User registered successfully! Please login now."));
    }

    // ---------------- Login ----------------
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        User user = userService.getUserByEmail(email).orElse(null);

        if (user == null || !passwordEncoder.matches(password, user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid email or password"));
        }

        // Successful login response
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Login successful");
        response.put("role", user.getRole());   // returns enum value: CUSTOMER / ADMIN
        response.put("userId", user.getUserId());

        return ResponseEntity.ok(response);
    }
}
