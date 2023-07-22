// CartSymbol.js

import React from 'react';

const CartSymbol = ({ cartItemsCount }) => {
  return (
    <div className="cart-symbol">
      <i className="fas fa-shopping-cart"></i>
      <span>{cartItemsCount}</span>
    </div>
  );
};

export default CartSymbol;
