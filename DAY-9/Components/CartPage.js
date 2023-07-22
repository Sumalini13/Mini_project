// import React from "react";
// import "./CartPge.css";

// const CartPage = ({ cartItems }) => {
//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <div className="cart-container">
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             {cartItems.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.name} />
//                 <div className="cart-item-details">
//                   <p>{item.name}</p>
//                   <p>Price: ${item.price.toFixed(2)}</p>
//                 </div>
//               </div>
//             ))}
//             <div className="cart-total">
//               <p>Total Price: ${getTotalPrice()}</p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;
import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import "./CartPge.css";

const CartPage = ({ cartItems, onAddToCart }) => {
  const location = useLocation(); // Use useLocation to access the location object

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleAddToCart = (productToAdd) => {
    onAddToCart(productToAdd);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <p>Total Price: ${getTotalPrice()}</p>
            </div>
            <Link to="/checkout">Proceed to Checkout</Link>
            <button onClick={() => handleAddToCart(location.state.productToAdd)}>
              Add to Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
