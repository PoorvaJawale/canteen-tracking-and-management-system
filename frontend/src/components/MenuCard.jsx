import React from "react";
import "../styles/style.css";


const MenuCard = ({ item, onAdd }) => (
  <div className="menu-card">
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <p className="price">₹{item.price}</p>
    <button className="btn" onClick={() => onAdd(item)}>Add to Cart</button>
  </div>
);

export default MenuCard;
