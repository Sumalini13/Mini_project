// import React, { useState } from 'react';
// import './Cart.css';
// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const products = [
//     { id: 1, name: 'Product 1', price: 10, image: 'https://i.etsystatic.com/27513826/r/il/50ba83/5031884230/il_600x600.5031884230_604g.jpg' },
//     { id: 2, name: 'Product 2', price: 15, image: 'https://i.etsystatic.com/18815245/r/il/91f0ab/4152383476/il_600x600.4152383476_el93.jpg' },
//     { id: 3, name: 'Product 3', price: 20, image: 'https://media.istockphoto.com/id/639487044/photo/hands-of-a-potter-creating-an-earthen-jar.jpg?s=612x612&w=0&k=20&c=gCVqR1YvUT6qZhazjpNNGzlpgh_sQQJNzXNsh0ZZEh0=' },
//   ];

//   return (
//     <div className="container">
//       <h1>Add to Cart Page</h1>
//       <div className="products">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>Rs{product.price}</p>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//       <div className="cart">
//         <h2>Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <ul>
//             {cart.map((item) => (
//               <li key={item.id}>
//                 {item.name} - Rs{item.price}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from 'react';
import './Cart.css';
const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'https://i.etsystatic.com/27513826/r/il/50ba83/5031884230/il_600x600.5031884230_604g.jpg' },
    { id: 1, name: 'Product 2', price: 10, image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/cf/31/f2/vines-art-glass.jpg' },
    { id: 1, name: 'Product 3', price: 10, image: 'https://m.media-amazon.com/images/I/61HvM7c2AfL._AC_UF894,1000_QL80_.jpg' },
  
    { id: 3, name: 'Product 6', price: 20, image: 'https://media.istockphoto.com/id/639487044/photo/hands-of-a-potter-creating-an-earthen-jar.jpg?s=612x612&w=0&k=20&c=gCVqR1YvUT6qZhazjpNNGzlpgh_sQQJNzXNsh0ZZEh0=' },
  ];

  return (
    <div className="container">
      <h1>Add to Cart Page</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rs{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Rs{item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;

// import React from 'react';
// import { connect } from 'react-redux';
// import { addToCart, removeFromCart } from './actions';

// const Cart = ({ cart, addToCart, removeFromCart }) => {
//   const products = [
//     { id: 1, name: 'Product 1', price: 10, image: 'https://i.etsystatic.com/27513826/r/il/50ba83/5031884230/il_600x600.5031884230_604g.jpg' },
//     { id: 2, name: 'Product 2', price: 15, image: 'https://i.etsystatic.com/18815245/r/il/91f0ab/4152383476/il_600x600.4152383476_el93.jpg' },
//     { id: 3, name: 'Product 3', price: 20, image: 'https://media.istockphoto.com/id/639487044/photo/hands-of-a-potter-creating-an-earthen-jar.jpg?s=612x612&w=0&k=20&c=gCVqR1YvUT6qZhazjpNNGzlpgh_sQQJNzXNsh0ZZEh0=' },
//   ];

//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   const handleRemoveFromCart = (productId) => {
//     removeFromCart(productId);
//   };

//   return (
//     <div className="container">
//       <h1>Add to Cart Page</h1>
//       <div className="products">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>Rs{product.price}</p>
//             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//       <div className="cart">
//         <h2>Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <ul>
//             {cart.map((item) => (
//               <li key={item.id}>
//                 {item.name} - Rs{item.price}
//                 <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart,
//   };
// };

// export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart);
