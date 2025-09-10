import React, { useState } from "react";
import DashboardOrderCard from "../components/DashboardOrderCard";

const Dashboard = () => {
  // Fake orders
  const [orders, setOrders] = useState([
    { id: 1, customerName: "Alice", items: [{ name: "Cheese Burger" }, { name: "Fries" }], status: "Pending" },
    { id: 2, customerName: "Bob", items: [{ name: "Veg Pizza" }], status: "Preparing" },
    { id: 3, customerName: "Charlie", items: [{ name: "Pasta Alfredo" }], status: "Done" },
    { id: 4, customerName: "Diana", items: [{ name: "Cappuccino" }, { name: "Chocolate Cake" }], status: "Pending" },
    { id: 5, customerName: "Ethan", items: [{ name: "French Fries" }], status: "Preparing" },
    { id: 6, customerName: "Fiona", items: [{ name: "Veg Pizza" }, { name: "Pasta Alfredo" }], status: "Done" },
  ]);

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Dashboard Orders</h2>
      {orders.map(order => (
        <DashboardOrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Dashboard;
