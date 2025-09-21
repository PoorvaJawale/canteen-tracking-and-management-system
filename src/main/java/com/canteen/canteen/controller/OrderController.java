package com.canteen.canteen.controller;

import com.canteen.canteen.model.Order;
import com.canteen.canteen.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/checkout")
    public Order checkout(@RequestBody Order order) {
        return orderService.placeOrder(order);
    }

    @GetMapping("/user/{userId}")
    public List<Order> getUserOrders(@PathVariable int userId) {
        return orderService.getOrdersByUserId(userId);
    }
}
