package com.canteen.canteen.repository;

import com.canteen.canteen.model.Order;
import com.canteen.canteen.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByUser(User user);  // ✅ needed for fetching orders by logged-in user
}
