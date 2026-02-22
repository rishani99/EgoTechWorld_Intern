const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: String,
  product: String,
  quantity: Number,
  status: {
    type: String,
    default: "Pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);