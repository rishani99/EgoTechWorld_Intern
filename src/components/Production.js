import React, { useState, useEffect } from "react";
import "./Production.css";

const Production = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [productionList, setProductionList] = useState([]);

  // Sample data load
  useEffect(() => {
    const sampleData = [
      {
        _id: "1",
        productName: "Wood Table",
        quantity: 15,
        date: "2026-03-01",
      },
      {
        _id: "2",
        productName: "Office Chair",
        quantity: 30,
        date: "2026-03-02",
      },
      {
        _id: "3",
        productName: "Steel Cabinet",
        quantity: 10,
        date: "2026-03-03",
      },
    ];

    setProductionList(sampleData);
  }, []);

  const addProduction = () => {
    if (!productName || !quantity || !date) return;

    const newRecord = {
      _id: Date.now().toString(),
      productName,
      quantity: parseInt(quantity),
      date,
    };

    setProductionList([...productionList, newRecord]);

    setProductName("");
    setQuantity("");
    setDate("");
  };

  const deleteRecord = (id) => {
    setProductionList(
      productionList.filter((item) => item._id !== id)
    );
  };

  return (
    <div className="production-container">
      <h2>Production Management</h2>

      <div className="production-inputs">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={addProduction}>Add</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {productionList.map((item) => (
            <tr key={item._id}>
              <td>{item.productName}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteRecord(item._id)}
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

export default Production;