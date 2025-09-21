package com.canteen.canteen.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private double price;
}
