import React from "react";
import "../styles/DashboardOrderCard.css";

const DashboardOrderCard = ({ order }) => {
  const { id, customerName, items, status } = order;

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status-pending";
      case "Preparing":
        return "status-preparing";
      case "Done":
        return "status-done";
      default:
        return "";
    }
  };

  return (
    <div className="order-card">
      <h3>Order #{id}</h3>
      <p><strong>Customer:</strong> {customerName}</p>
      <p><strong>Items:</strong> {items.map(item => item.name).join(", ")}</p>
      <span className={`status-badge ${getStatusClass(status)}`}>{status}</span>
    </div>
  );
};

export default DashboardOrderCard;
