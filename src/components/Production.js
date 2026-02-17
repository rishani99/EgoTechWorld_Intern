import React, { useState } from "react";
import "./Production.css";

const Production = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [productionList, setProductionList] = useState([]);

  const addProduction = () => {
    if (productName === "" || quantity === "" || date === "") return;

    const newRecord = {
      id: Date.now(),
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
    const updatedList = productionList.filter((item) => item.id !== id);
    setProductionList(updatedList);
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
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteRecord(item.id)}
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
