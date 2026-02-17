import React, { useState } from "react";
import "./order.css";

const Orders = () => {
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orders, setOrders] = useState([]);

  const addOrder = () => {
    if (!customer || !product || !quantity) return;

    const newOrder = {
      id: Date.now(),
      customer,
      product,
      quantity: parseInt(quantity),
      status: "Pending",
    };

    setOrders([...orders, newOrder]);
    setCustomer("");
    setProduct("");
    setQuantity("");
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  const markCompleted = (id) => {
    setOrders(
      orders.map((o) =>
        o.id === id ? { ...o, status: "Completed" } : o
      )
    );
  };

  return (
    <div className="orders-container">
      <h2>Orders Management</h2>

      <div className="orders-inputs">
        <input
          type="text"
          placeholder="Customer Name"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={addOrder}>Add Order</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td
                className={
                  order.status === "Completed"
                    ? "status-complete"
                    : "status-pending"
                }
              >
                {order.status}
              </td>
              <td>
                {order.status !== "Completed" && (
                  <button
                    className="complete-btn"
                    onClick={() => markCompleted(order.id)}
                  >
                    Complete
                  </button>
                )}
                <button
                  className="delete-btn"
                  onClick={() => deleteOrder(order.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
