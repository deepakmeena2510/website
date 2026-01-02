// ===============================
// AI Video Earning App - Backend
// Server Start File
// ===============================

// Express import
const express = require("express");

// CORS (mobile app / website connect ke liye)
const cors = require("cors");

// Database connect
const connectDB = require("./config/db");

// App banaya
const app = express();

// ===============================
// Middleware
// ===============================
app.use(cors());
app.use(express.json()); // JSON data read karne ke liye

// ===============================
// Database Connect
// ===============================
connectDB();

// ===============================
// Routes (abhi empty, baad me code aayega)
// ===============================
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/video", require("./routes/video"));
app.use("/api/admin", require("./routes/admin"));

// ===============================
// Test Route
// ===============================
app.get("/", (req, res) => {
  res.send("AI Video Earning App Backend Running");
});

// ===============================
// Server Listen
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
