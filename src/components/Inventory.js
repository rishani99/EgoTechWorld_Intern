import React, { useState } from "react";
import "./Inventory.css";

const Inventory = () => {
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [inventory, setInventory] = useState([]);

  const addItem = () => {
    if (itemName === "" || itemQty === "") return;

    const newItem = {
      id: Date.now(),
      name: itemName,
      quantity: parseInt(itemQty),
    };

    setInventory([...inventory, newItem]);
    setItemName("");
    setItemQty("");
  };

  const deleteItem = (id) => {
    const updatedList = inventory.filter((item) => item.id !== id);
    setInventory(updatedList);
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

        <button onClick={addItem}>Add Item</button>
      </div>

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
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(item.id)}
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

export default Inventory;
