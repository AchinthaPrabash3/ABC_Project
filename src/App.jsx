import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import MenuPage from "./pages/Menu";
import Cart from "./pages/Cart";
import LoginPage from "./pages/Login";
import ShopPage from "./pages/Shop";
import SignupPage from "./pages/SignUp";
import ReservePage from "./pages/Reserve";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage setCart={setCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart data={cart} />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
