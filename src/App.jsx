import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/roboto";
import ProductSection from "./components/ProductSection";
import ShoppingPage from "./pages/ShoppingPage";
import AdminDashboardSideBar from "./components/AdminDashboardSideBar";
import Navbar2 from "./components/Navbar2";
import CartPage from "./components/CartPage";
import ViewCartPage from "./pages/ViewCartPage";
import { CartProvider } from "react-use-cart";

// bootstrap-->5
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/shop" element={<ShoppingPage />} />
            <Route path="/cart" element={<ViewCartPage />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
