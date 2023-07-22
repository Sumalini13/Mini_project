import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart = [], setCart }) => {
  const incqty = (product) => {
    setCart((prevCart) =>
      prevCart.map((curElm) =>
        curElm.id === product.id ? { ...curElm, qty: curElm.qty + 1 } : curElm
      )
    );
  };

  const decqty = (product) => {
    setCart((prevCart) =>
      prevCart.map((curElm) =>
        curElm.id === product.id && curElm.qty > 0
          ? { ...curElm, qty: curElm.qty - 1 }
          : curElm
      )
    );
  };

  const removeproduct = (product) => {
    setCart((prevCart) => prevCart.filter((x) => x.id !== product.id));
  };

  const Totalprice = cart.reduce(
    (price, item) => price + item.qty * parseFloat(item.Price.replace(/,/g, '')),
    0
  );

  return (
    <>
      <div className="cartcontainer">
        {cart.length === 0 ? (
          <div className="emptycart">
            <h2 className="empty">Cart is Empty</h2>
            <Link to="/product" className="emptycartbtn">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="contant">
            {cart.map((curElm) => (
              <div className="cart_item" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title} />
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{curElm.Cat}</h4>
                    <h3>{curElm.Title}</h3>
                    <p>Price: ₹{curElm.Price}</p>
                    <div className="qty">
                      <button className="incqty" onClick={() => incqty(curElm)}>
                        +
                      </button>
                      <input type="text" value={curElm.qty} readOnly />
                      <button className="decqty" onClick={() => decqty(curElm)}>
                        -
                      </button>
                    </div>
                    <h4 className="subtotal">
                      sub total: $
                      {(
                        parseFloat(curElm.Price.replace(/,/g, '')) *
                        curElm.qty
                      ).toFixed(2)}
                    </h4>
                  </div>
                  <div className="close">
                    <button onClick={() => removeproduct(curElm)}>
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <>
            <h2 className="totalprice">total: ₹ {Totalprice.toFixed(2)}</h2>
            <button className="checkout">Checkout</button>
          </>
        )}
        {/* <Cart cart={cart} setCart={setCart} /> */}
      </div>
    </>
  );
};

export default Cart;
