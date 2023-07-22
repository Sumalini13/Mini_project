import React from "react";

const ShoppingCart = ({ cartItems, onRemoveItem }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;




// // ShoppingCart.js

// import React from "react";

// const ShoppingCart = ({ cartItems, onRemoveItem }) => {
//   const handleRemoveItem = (itemId) => {
//     onRemoveItem(itemId);
//   };

//   return (
//     <div className="shopping-cart">
//       <h1>Shopping Cart</h1>
//       <div>
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cartItems.map((item) => (
//             <div key={item.id}>
//               <img src={item.image} alt={item.name} />
//               <p>{item.name}</p>
//               <button onClick={() => handleRemoveItem(item.id)}>
//                 Remove Item
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;





