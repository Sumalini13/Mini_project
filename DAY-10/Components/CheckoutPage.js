// CheckoutPage.js
import React, { useState } from "react";

const CheckoutPage = ({ cartItems, onRemoveItem }) => {
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle the checkout process, e.g., send data to a backend API
    console.log("Checkout submitted:", { shippingAddress, paymentMethod });
    // After successful checkout, you may want to clear the cart or navigate to a thank you page.
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        {/* Shipping Address */}
        <label htmlFor="shippingAddress">Shipping Address:</label>
        <input
          type="text"
          id="shippingAddress"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          required
        />

        {/* Payment Method */}
        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>

        <button type="submit">Place Order</button>
      </form>
{/* 
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove Item
                </button>
              </div>
            ))
          )}
        </div>
      </div> */}
    </div>
  );
};

export default CheckoutPage;


// import React from "react";
// import CheckoutPage from "./CheckoutPage";

// const Checkout = ({ cartItems, onRemoveItem }) => {
//   return (
//     <div>
//       <CheckoutPage cartItems={cartItems} onRemoveItem={onRemoveItem} />
//     </div>
//   );
// };

// export default Checkout;
