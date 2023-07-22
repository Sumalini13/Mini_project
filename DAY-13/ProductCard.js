import React from "react";
import { useNavigate,Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart(product);
    // navigate("/cart");
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <Link
        to={{
          pathname: "/cart",
          state: { productToAdd: product }, // Pass the product data in state
        }}>

      <button >Add to Cart</button>
        </Link>
    </div>
  );
};

export default ProductCard;
