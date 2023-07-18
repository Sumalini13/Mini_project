import React from 'react';
import './OrderCheckoutPage.css';

class OrderCheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrders: false,
      showCheckout: false,
      ordersData: [],
    };
  }

  handlePayment = () => {
    // Handle payment logic here
    alert('Payment processed successfully!');
  };

  toggleOrders = () => {
    this.setState(prevState => ({ showOrders: !prevState.showOrders }));
  };

  toggleCheckout = () => {
    this.setState(prevState => ({ showCheckout: !prevState.showCheckout }));
  };

  render() {
    const { showOrders, showCheckout, ordersData } = this.state;

    return (
      <div className="container1234">
        <div className="sidebar1234">
          <button className="sidebar-item1234" onClick={this.toggleOrders}>Orders</button>
          {/* <button className="sidebar-item1234" onClick={this.toggleCheckout}>Checkout</button> */}
        </div>
        <div className="content1234">
          {showOrders && (
            <div className="orders">
          
              {ordersData.length > 0 ? (
                <div className="order-list">
                  {ordersData.map((order) => (
                    <div className="order" key={order.id}>
                      <div className="order-details">
                        <h3>{order.productName}</h3>
                        <p>Price: ${order.price}</p>
                        <p>Date: {order.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-orders">
                  <p>No recent orders</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default OrderCheckoutPage;
