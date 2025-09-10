import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";
import axios from "axios";

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu from backend
    axios.get("http://localhost:8080/api/menu")
      .then(res => setMenuItems(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleAddToCart = (item) => {
    console.log("Add to Cart:", item);
    // Later integrate with backend orders
  };

  return (
    <div>
      <div className="container">
        <h2 className="page-title">Our Menu</h2>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} onAdd={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
