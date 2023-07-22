// import React, { useState } from "react";

// import { Routes, Route, Link } from "react-router-dom";
// import ProductCard from "./ProductCard";
// import ShoppingCart from "./ShoppingCart";
// import CheckoutPage from "./CheckoutPage";
// import ProductDetails from "./ProductDetails"; // Create a new component for product details
// import "./Shop.css";



// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     image: "https://5.imimg.com/data5/VV/XM/ZL/IOS-40419344/glass-handicrafts-250x250.jpeg",
//     description: "Description of Product 1",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0jDLBck4dpJye9h5HBLk4lqemBa00SUsKhr-HLM6ycVMOjgC8EZfbT4kI5Nobsdx7Cc&usqp=CAU",
//     description: "Description of Product 2",
//   },
//   {
//     id: 3,
//     name: "Product 2",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmT05FxLh2UDY7k7ZdlcVcUciYA6GQePxwQ&usqp=CAU",
//     description: "Description of Product 2",
//   },
//   {
//     id: 4,
//     name: "Product 2",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJZYI0SFxhkIq3fblzfb3w2H0v-ag3GY0LTnHrsNjyzjh9nROZz5Bj11W6qq_EOnnEPQ&usqp=CAU",
//     description: "Description of Product 2",
//   },
//   {
//     id: 5,
//     name: "Product 2",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKeA6rywgHYqbsysRhcIKAEeNQNIjkII3eg&usqp=CAU",
//     description: "Description of Product 2",
//   },
//   {
//     id: 6,
//     name: "Product 2",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKzMPuym7Zzso_TV0vEpUBlxFa9FbJe-GNg&usqp=CAU",
//     description: "Description of Product 2",
//   },
//   {
//     id: 7,
//     name: "Product 2",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbf6midgSmeS3_R4PEiVBwZhAgHEfGvyFZwmCGKGhRQgd7dNX84iS2D85wRrfnT_7DlQ&usqp=CAU",
//     description: "Description of Product 2",
//   },
//   {
//     id: 8,
//     name: "Product 2",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vvwkbvIVnWTCdJRMo6Ws3K4dJ-SMaTaiLXZFpYsRlKFfA09q7kwnaPUKHWdjNuDRB1E&usqp=CAU",
//     description: "Description of Product 2",
//   },
//   {
//     id: 9,
//     name: "Product 2",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrZ3vKPtS2Ya0hoqwsTHzSP9bQLs__Ujo-Q&usqp=CAU",
//     description: "Description of Product 2",
//   },
//   {
//     id: 10,
//     name: "Product 2",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOTd0Ect22yEI8eq8qC9O29pZsMj5ThUg3jujaHvOq7qkR_IZk1lUuXYcDyykLkFCPQE&usqp=CAU",
//     description: "Description of Product 2",
//   },
//   {
//     id: 11,
//     name: "Product 2",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsfMnR3nyKlY8BjYSpnFrhmLwnwea8Vgqfw&usqp=CAU",
//     description: "Description of Product 2",
//   },
//   {
//     id: 12,
//     name: "Product 2",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fCNNidILAYIDr9wvU6gz93jMbh6Gdzfgywa1EQZ1G38ErtIJ_zfgDybYkmxWJK6HhHo&usqp=CAU",
//     description: "Description of Product 2",
//   },
//   // Add more products as needed
// ];

// const Shop = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const handleBuyNow = (product) => {
//     setCartItems((prevCartItems) => [...prevCartItems, product]);
//   };

//   const handleRemoveItem = (itemId) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCartItems);
//   };

//   return (
//     <div>
//       <div>
//         <center>
//           <h1>Top Products from Best Sellers</h1>
//         </center>
//         <div className="product-container">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onAddToCart={handleBuyNow}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="carty">
//         <ShoppingCart cartItems={cartItems} onRemoveItem={handleRemoveItem} />
//       </div>

//       <div className="checkout">
//         <CheckoutPage cartItems={cartItems} onRemoveItem={handleRemoveItem} />
//       </div>

//       {/* Set up the routing for the product details page */}
//       <Routes>
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </div>
//   );
// };
// export default Shop;

import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import ShoppingCart from "./ShoppingCart";
import CheckoutPage from "./CheckoutPage";
import ProductDetails from "./ProductDetails"; // Create a new component for product details
import CartPage from "./CartPage"; // Import the new CartPage component
import "./Shop.css";

const products = [
  {
        id: 1,
        name: "Product 1",
        image: "https://5.imimg.com/data5/VV/XM/ZL/IOS-40419344/glass-handicrafts-250x250.jpeg",
        description: "Description of Product 1",
      },
      {
        id: 2,
        name: "Product 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0jDLBck4dpJye9h5HBLk4lqemBa00SUsKhr-HLM6ycVMOjgC8EZfbT4kI5Nobsdx7Cc&usqp=CAU",
        description: "Description of Product 2",
      },
      {
        id: 3,
        name: "Product 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmT05FxLh2UDY7k7ZdlcVcUciYA6GQePxwQ&usqp=CAU",
        description: "Description of Product 2",
      },
      {
        id: 4,
        name: "Product 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJZYI0SFxhkIq3fblzfb3w2H0v-ag3GY0LTnHrsNjyzjh9nROZz5Bj11W6qq_EOnnEPQ&usqp=CAU",
        description: "Description of Product 2",
      },
      {
        id: 5,
        name: "Product 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKeA6rywgHYqbsysRhcIKAEeNQNIjkII3eg&usqp=CAU",
        description: "Description of Product 2",
      },
      {
        id: 6,
        name: "Product 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKzMPuym7Zzso_TV0vEpUBlxFa9FbJe-GNg&usqp=CAU",
        description: "Description of Product 2",
      },
      {
        id: 7,
        name: "Product 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbf6midgSmeS3_R4PEiVBwZhAgHEfGvyFZwmCGKGhRQgd7dNX84iS2D85wRrfnT_7DlQ&usqp=CAU",
        description: "Description of Product 2",
      },
      {
        id: 8,
        name: "Product 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vvwkbvIVnWTCdJRMo6Ws3K4dJ-SMaTaiLXZFpYsRlKFfA09q7kwnaPUKHWdjNuDRB1E&usqp=CAU",
        description: "Description of Product 2",
      },
      {
        id: 9,
        name: "Product 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrZ3vKPtS2Ya0hoqwsTHzSP9bQLs__Ujo-Q&usqp=CAU",
        description: "Description of Product 2",
      },
      {
        id: 10,
        name: "Product 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOTd0Ect22yEI8eq8qC9O29pZsMj5ThUg3jujaHvOq7qkR_IZk1lUuXYcDyykLkFCPQE&usqp=CAU",
        description: "Description of Product 2",
      },
      {
        id: 11,
        name: "Product 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsfMnR3nyKlY8BjYSpnFrhmLwnwea8Vgqfw&usqp=CAU",
        description: "Description of Product 2",
      },
      {
        id: 12,
        name: "Product 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fCNNidILAYIDr9wvU6gz93jMbh6Gdzfgywa1EQZ1G38ErtIJ_zfgDybYkmxWJK6HhHo&usqp=CAU",
        description: "Description of Product 2",
      },
];

// const Shop = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const handleBuyNow = (product) => {
//     setCartItems((prevCartItems) => [...prevCartItems, product]);
//   };

//   const handleRemoveItem = (itemId) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCartItems);
//   };

//   return (
//     <div>
//       <div>
//         <center>
//           <h1>Top Products from Best Sellers</h1>
//         </center>
//         <div className="product-container">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} onAddToCart={handleBuyNow} />
//           ))}
//         </div>
//       </div>
//       <hr />
//       <div className="carty">
//         <ShoppingCart cartItems={cartItems} onRemoveItem={handleRemoveItem} />
//       </div>
//       <hr />
//       <div className="checkout">
//         <CheckoutPage cartItems={cartItems} onRemoveItem={handleRemoveItem} />
//       </div>

//       {/* Set up the routing for the product details page and the cart page */}
//       <Routes>
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
//       </Routes>
//     </div>
//   );
// };

// export default Shop;

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <div>
        <center>
          <h1>Top Products from Best Sellers</h1>
        </center>
        <div className="product-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <hr />
      <div className="carty">
        <ShoppingCart cartItems={cartItems} onRemoveItem={handleRemoveItem} />
      </div>
      <hr />
      <div className="checkout">
        <CheckoutPage cartItems={cartItems} onRemoveItem={handleRemoveItem} />
      </div>

      {/* Set up the routing for the product details page and the cart page */}
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          // element={<CartPage cartItems={cartItems} onAddToCart={handleAddToCart} />}
        />
      </Routes>
    </div>
  );
};

export default Shop;