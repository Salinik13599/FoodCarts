import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from"./Components/Header";
import { Home } from "./Components/Home";
import { Cart } from "./Components/Cart";
import { useState } from "react";
import { Product } from "./Components/Product";

 function App() {
  const [cart, setcart] = useState([]);
  return (
  
        <BrowserRouter>
        < Header cart={cart}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home cart=
            {cart} setcart={setcart} />} />
            <Route path="/Cart" element={<Cart cart=
            {cart} setcart={setcart}/>} />
          </Routes>
        </div>
        </BrowserRouter>

        
      
  );
 }

 export default App;
