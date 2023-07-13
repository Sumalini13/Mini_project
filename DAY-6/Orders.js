import React from 'react';
import './OrdersPage.css';

const OrdersPage = () => {
  const orders = [
    { id: 1, name: 'Product A', date: '2023-07-10', price: 29.99 },
    { id: 2, name: 'Product B', date: '2023-07-09', price: 19.99 },
    { id: 3, name: 'Product C', date: '2023-07-08', price: 24.99 },
    // Add more orders as needed
  ];

  return (
    <div className="orders-page">
      <h1>Recent Orders</h1>
      <div className="orders-container">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-info">
              <h2>{order.name}</h2>
              <p>Order Date: {order.date}</p>
              <p>Price: ${order.price}</p>
            </div>
            <div className="order-image">
              {/* Add order image */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
