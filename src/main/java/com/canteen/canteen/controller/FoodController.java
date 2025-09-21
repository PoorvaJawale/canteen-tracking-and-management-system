package com.canteen.canteen.controller;

import com.canteen.canteen.model.Food;
import com.canteen.canteen.service.FoodService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:3000")
public class FoodController {
    private final FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @GetMapping
    public List<Food> getAllFoods() {
        return foodService.getAllFoods();
    }

    @PostMapping
    public Food addFood(@RequestBody Food food) {
        return foodService.addFood(food);
    }
}
