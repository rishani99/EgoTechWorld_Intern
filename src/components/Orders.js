import React, { useState, useEffect } from "react";
import axios from "axios";
import "./order.css";

const Orders = () => {
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:5000/api/orders");
    setOrders(res.data);
  };

  const addOrder = async () => {
    if (!customer || !product || !quantity) return;

    await axios.post("http://localhost:5000/api/orders", {
      customer,
      product,
      quantity,
    });

    fetchOrders();
    setCustomer("");
    setProduct("");
    setQuantity("");
  };

  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:5000/api/orders/${id}`);
    fetchOrders();
  };

  const toggleStatus = async (order) => {
    await axios.put(`http://localhost:5000/api/orders/${order._id}`, {
      status: order.status === "Pending" ? "Completed" : "Pending"
    });

    fetchOrders();
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