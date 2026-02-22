const express = require("express");
const router = express.Router();
const Order = require("../models/order");

// GET all orders
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// CREATE order
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});

// DELETE order
router.delete("/:id", async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
});

// UPDATE status
router.put("/:id", async (req, res) => {
  const updated = await Order.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

module.exports = router;