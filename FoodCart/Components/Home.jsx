import React, { useState } from "react";
import data from "../Assests/Product.json";
import "../App.css";

export const Home = ({ cart, setcart }) => {
  const [Product] = useState(data);

  const addcart = (product) => {
   
    setcart([...cart, product]);
  };

  const removecart = (product) => {
   
    setcart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <div className="product">
      {Product.map((product) => (
        <div key={product.id} className="product-card">
          <div className="img">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="details">
            <h3>{product.name}</h3>
            <p>Price Rs: {product.price}</p>
            {cart.includes(product) ? (
              <button
                className="btnRemove"
                onClick={() => removecart(product)}
              >
                Remove from cart
              </button>
            ) : (
              <button onClick={() => addcart(product)}>Add to cart</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
