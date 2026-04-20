import React, { useState, useEffect } from "react";
import "./order.css";

const Orders = () => {
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orders, setOrders] = useState([]);

  // Sample data load
  useEffect(() => {
    const sampleOrders = [
      {
        _id: "1",
        customer: "Nimal",
        product: "Wood Table",
        quantity: 2,
        status: "Pending",
      },
      {
        _id: "2",
        customer: "Kasun",
        product: "Office Chair",
        quantity: 5,
        status: "Completed",
      },
      {
        _id: "3",
        customer: "Saman",
        product: "Steel Cabinet",
        quantity: 1,
        status: "Pending",
      },
    ];

    setOrders(sampleOrders);
  }, []);

  const addOrder = () => {
    if (!customer || !product || !quantity) return;

    const newOrder = {
      _id: Date.now().toString(),
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
    setOrders(orders.filter((order) => order._id !== id));
  };

  const toggleStatus = (order) => {
    const updatedOrders = orders.map((o) =>
      o._id === order._id
        ? {
            ...o,
            status: o.status === "Pending" ? "Completed" : "Pending",
          }
        : o
    );

    setOrders(updatedOrders);
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
          placeholder="Product Name"
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
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => toggleStatus(order)}>
                  Toggle
                </button>
                <button onClick={() => deleteOrder(order._id)}>
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