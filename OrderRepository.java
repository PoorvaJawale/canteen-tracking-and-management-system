package com.canteen.canteen.repository;

import com.canteen.canteen.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    // You can add custom query methods later, for example:
    // List<Order> findByUser(User user);
    // List<Order> findByStatus(Status status);
}
