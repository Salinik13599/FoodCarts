import React, { useEffect, useState } from "react";
import "./Cart.css";

export const Cart = ({ cart, setcart }) => {
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    
    const totalAmount = cart.reduce((acc, curr) => acc + parseInt(curr.price), 0);
    setTotal(totalAmount);
  }, [cart]); 

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Total Amount Rs: {Total}</h2>
    </>
  );
};
