import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Accessories from "./components/Accessories";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import MyNavbar from "./components/MyNavbar";
import { useState } from "react";
import RegisterForm from "./authentication/RegisterForm";
import Shoes from "./components/Shoes";
import LoginForm from "./authentication/LoginForm";
import Luggages from "./components/Luggages";
import Main from "./components/Main";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <Router>
      {/* Navbar with cart count */}
      <MyNavbar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessories" element={<Accessories onAddCart={handleAddCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/shoes" element = {<Shoes onAddCart = {handleAddCart}/>}/>
        <Route path="/luggages" element = {<Luggages onAddCart={handleAddCart}/>}/>
        <Route path="/main" element = {<Main onAddCart={handleAddCart}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
