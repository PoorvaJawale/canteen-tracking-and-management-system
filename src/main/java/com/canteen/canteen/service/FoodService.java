package com.canteen.canteen.service;

import com.canteen.canteen.model.Food;
import com.canteen.canteen.repository.FoodRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {
    private final FoodRepository foodRepository;

    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public List<Food> getAllFoods() {
        return foodRepository.findAll();
    }

    public Food addFood(Food food) {
        return foodRepository.save(food);
    }
}
