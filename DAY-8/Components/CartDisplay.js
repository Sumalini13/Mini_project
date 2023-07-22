import React from 'react';

const CartDisplay = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.Title}</span>
              <span>Quantity: {item.qty}</span>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartDisplay;
