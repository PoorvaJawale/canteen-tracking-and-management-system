package com.canteen.canteen.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserDashboardController {

    @GetMapping("/dashboard/customer")
    public String customerDashboard() {
        return "Welcome to Customer Dashboard!";
    }
}
