package com.canteen.canteen.repository;

import com.canteen.canteen.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Integer> {
}
