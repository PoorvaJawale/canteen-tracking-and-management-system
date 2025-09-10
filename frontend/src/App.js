import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/dashboard" element={<Dashboard type="admin" />} />
            <Route path="/user/dashboard" element={<Dashboard type="user" />} />
            <Route path="/support" element={<Support />} />  {/* <-- Support route */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
