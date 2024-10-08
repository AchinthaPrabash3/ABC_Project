import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import MenuPage from "./pages/Menu";
import Cart from "./pages/Cart";
import LoginPage from "./pages/Login";
import ShopPage from "./pages/Shop";
import SignupPage from "./pages/SignUp";
import ReservePage from "./pages/Reserve";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import StaffPanel from "./pages/StaffPanel";
import AdminPanal from "./pages/AdminPanal";
import Footer from "./components/Footer";
import ContextProvider from "./components/ContextProvider";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const data = window.sessionStorage.getItem("cartItems");
    if (data !== null) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (cart.length !== 0) {
      window.sessionStorage.setItem("cartItems", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <ContextProvider>
      <Router>
        <NavBar cart={cart} />
        <Routes>
          <Route path="/" element={<HomePage setCart={setCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/shop" element={<ShopPage setCart={setCart} />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/cart"
            element={<Cart data={cart} setCart={setCart} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/staff" element={<StaffPanel cart={cart} />} />
          <Route path="/admin" element={<AdminPanal />} />
        </Routes>
      </Router>
      <Footer />
    </ContextProvider>
  );
}

export default App;
