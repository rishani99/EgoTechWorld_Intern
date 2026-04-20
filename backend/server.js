const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const inventoryRoutes = require("./routes/inventory");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection (Mongoose 7+)
mongoose.connect("mongodb://127.0.0.1:27017/mmsDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/inventory", inventoryRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("MMS Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});