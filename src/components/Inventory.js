import React, { useState, useEffect } from "react";
import "./Inventory.css";

const Inventory = () => {
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const sampleData = [
      { _id: "1", itemName: "Pen", quantity: 25 },
      { _id: "2", itemName: "Pencil", quantity: 100 },
      { _id: "3", itemName: "Eraser", quantity: 40 },
      { _id: "4", itemName: "Ruler", quantity: 10 },
      { _id: "5", itemName: "Notebook", quantity: 60 },
      { _id: "6", itemName: "Marker", quantity: 15 },
      { _id: "7", itemName: "Stapler", quantity: 5 },
    ];

    setInventory(sampleData);
  }, []);

  const addItem = () => {
    if (itemName.trim() === "" || itemQty === "") return;

    const newItem = {
      _id: Date.now().toString(),
      itemName,
      quantity: parseInt(itemQty),
    };

    setInventory([...inventory, newItem]);
    setItemName("");
    setItemQty("");
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter((item) => item._id !== id));
  };

  return (
    <div className="inventory-container">
      <h2>Inventory Management</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={itemQty}
          onChange={(e) => setItemQty(e.target.value)}
        />
        <button className="add-btn" onClick={addItem}>
          Add Item
        </button>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item._id}>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteItem(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;