import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fake menu data
    const fakeMenu = [
      { id: 1, name: "Cheese Burger", description: "Juicy burger with cheddar", price: 120, image: "https://source.unsplash.com/300x200/?burger" },
      { id: 2, name: "Veg Pizza", description: "Tasty pizza with veggies", price: 250, image: "https://source.unsplash.com/300x200/?pizza" },
      { id: 3, name: "French Fries", description: "Crispy golden fries", price: 80, image: "https://source.unsplash.com/300x200/?fries" },
      { id: 4, name: "Cappuccino", description: "Hot coffee with foam", price: 150, image: "https://source.unsplash.com/300x200/?coffee" },
      { id: 5, name: "Pasta Alfredo", description: "Creamy pasta with herbs", price: 200, image: "https://source.unsplash.com/300x200/?pasta" },
      { id: 6, name: "Chocolate Cake", description: "Rich chocolate delight", price: 180, image: "https://source.unsplash.com/300x200/?cake" },
    ];
    setMenuItems(fakeMenu);
  }, []);

  const handleAddToCart = (item) => {
    console.log("Add to Cart:", item);
  };

  // Generate lots of steam for cinematic effect
  const steamElements = Array.from({ length: 80 });

  return (
    <div>
      <div className="home-container">
        <div className="overlay"></div>

        {/* Steam */}
        <div className="steam-container">
          {steamElements.map((_, i) => (
            <div
              key={i}
              className="steam"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 50}px`,
                height: `${150 + Math.random() * 250}px`,
                animationDuration: `${5 + Math.random() * 10}s`,
                opacity: 0.05 + Math.random() * 0.3
              }}
            ></div>
          ))}
        </div>

        {/* Main content */}
        <div className="home-content">
          <div className="left-zone">
            <h1 className="canteen-title">Gourmet Canteen</h1>
            <p className="canteen-info">
              Fresh meals, cozy ambiance, and a taste you'll remember. 
              Join us and experience the ultimate canteen delight!
            </p>
          </div>

          <div className="right-zone">
            <div className="login-card">
              <h2>Login</h2>
              <button
                className="login-btn admin-btn"
                onClick={() => navigate("/login?type=admin")}
              >
                Admin Login
              </button>
              <button
                className="login-btn user-btn"
                onClick={() => navigate("/login?type=user")}
              >
                User Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu section */}
      <div className="menu-section">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          {menuItems.map(item => (
            <MenuCard key={item.id} item={item} onAdd={handleAddToCart} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
