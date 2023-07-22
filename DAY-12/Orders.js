// import React from 'react';
// import './OrdersPage.css';

// const Orders = () => {
//   const ordersData = [];

//   const handlePayment = () => {
//     // Handle payment logic here
//     alert('Payment processed successfully!');
//   };

//   return (
//     <div className="orders">
//       <h2>Orders</h2>
//       {ordersData.length > 0 ? (
//         <div className="order-list">
//           {ordersData.map((order) => (
//             <div className="order" key={order.id}>
//               <div className="order-details">
//                 <h3>{order.productName}</h3>
//                 <p>Price: ${order.price}</p>
//                 <p>Date: {order.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="no-orders">
//           <p>No recent orders</p>
//         </div>
//       )}
//       <div className="payment-method">
//         <h2>Payment Method</h2>
//         <p>Please choose your preferred payment method:</p>
//         <ul>

//         <button><li>Credit Card</li></button>
//           <li>PayPal</li>
//           <li>Bank Transfer</li>
//         </ul>
//         <button className="payment-button" onClick={handlePayment}>
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Orders;
import React from 'react';
import './asd.css';

class OrderCheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrders: false,
      showCheckout: false,
      orders: [],
    };
  }

  toggleOrders = () => {
    this.setState(prevState => ({ showOrders: !prevState.showOrders }));
  }

  toggleCheckout = () => {
    this.setState(prevState => ({ showCheckout: !prevState.showCheckout }));
  }

  render() {
    const { showOrders, showCheckout, orders } = this.state;

    return (
      <div className="container123">
        <div className="sidebar123">
          <div class="kk">
          <button className="sidebar-item" onClick={this.toggleOrders}>Orders</button>
          <button className="sidebar-item" onClick={this.toggleCheckout}>Checkout</button>
          </div>
        </div>
        <div className="content123">
          {showOrders && (
            <div className="order-cards123">
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <div className="card123" key={index}>
                    <h3>Order #{order.id}</h3>
                    {/* Display order details */}
                  </div>
                ))
              ) : (
                <p>No previous orders found.</p>
              )}
            </div>
          )}
          {showCheckout && (
            <div className="checkout-page">
              <h2>Checkout</h2>
             <center><h4>Proceed Payment</h4></center>
              {/* Display checkout options */}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default OrderCheckoutPage;
