import React from "react";
import { useParams } from "react-router";
import products from "./Shop";
const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL params
  const product = products.find((product) => product.id === parseInt(id, 10)); // Find the product by ID

  if (!product) {
    // Handle the case where the product with the given ID is not found
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* You can add more details about the product here */}
    </div>
  );
};

export default ProductDetails;
