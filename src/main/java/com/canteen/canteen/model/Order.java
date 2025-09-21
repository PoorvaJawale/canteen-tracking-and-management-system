package com.canteen.canteen.model;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private int orderId;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id") // ✅ matches FK
    private User user;

    @Column(name = "order_details")
    private String orderDetails;

    @Column(name = "payment_amount")
    private double paymentAmount;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status = Status.PENDING;

    @Column(name = "prep_time_minutes")
    private int prepTimeMinutes;

    @Column(name = "order_date")
    private Timestamp orderDate;

    // Getters & Setters
    public int getOrderId() { return orderId; }
    public void setOrderId(int orderId) { this.orderId = orderId; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public String getOrderDetails() { return orderDetails; }
    public void setOrderDetails(String orderDetails) { this.orderDetails = orderDetails; }
    public double getPaymentAmount() { return paymentAmount; }
    public void setPaymentAmount(double paymentAmount) { this.paymentAmount = paymentAmount; }
    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }
    public int getPrepTimeMinutes() { return prepTimeMinutes; }
    public void setPrepTimeMinutes(int prepTimeMinutes) { this.prepTimeMinutes = prepTimeMinutes; }
    public Timestamp getOrderDate() { return orderDate; }
    public void setOrderDate(Timestamp orderDate) { this.orderDate = orderDate; }
}

enum Status {
    PENDING, IN_MAKING, READY
}
