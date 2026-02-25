import React from "react";

const CartItem = ({ cart }) => {
  console.log("CartItem Rendered");

  return (
    <>
      <h2>Cart Items: {cart.length}</h2>

      <h3>Cart List</h3>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - 
          {item.category}-
           ₹{item.price}
        </div>
      ))}
    </>
  );
};

export default React.memo(CartItem);
