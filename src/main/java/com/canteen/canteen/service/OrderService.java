package com.canteen.canteen.service;


import com.canteen.canteen.model.Order;
import com.canteen.canteen.model.User;
import com.canteen.canteen.repository.OrderRepository;
import com.canteen.canteen.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors; // 👈 IMPORT COLLECTORS

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;

    public OrderService(OrderRepository orderRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }


    // Place order (your existing code)
    public Order placeOrder(Order order) {
        User user = userRepository.findById(order.getUser().getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        order.setUser(user);
        order.setOrderDate(Timestamp.from(Instant.now()));

        return orderRepository.save(order);
    }

    // Get orders of a specific user (your existing code)
    public List<Order> getOrdersByUserId(int userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return orderRepository.findByUser(user);
    }
}