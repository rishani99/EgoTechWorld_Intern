const mongoose = require("mongoose");

const ProductionSchema = new mongoose.Schema({
  batchNumber: { type: String, required: true },
  productName: { type: String, required: true },
  quantityPlanned: Number,
  quantityProduced: Number,
  status: { type: String, default: "pending" },
  startDate: { type: Date, default: Date.now },
  endDate: Date
}, { timestamps: true });

module.exports = mongoose.model("Production", ProductionSchema);