package com.canteen.canteen.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminDashboardController {

    @GetMapping("/dashboard/admin")
    public String adminDashboard() {
        return "Welcome to Admin Dashboard!";
    }
}
