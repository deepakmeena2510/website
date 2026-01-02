const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const videoRoutes = require("./routes/video");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ai_video_app");

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/admin", adminRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
