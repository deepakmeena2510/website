const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  coins: { type: Number, default: 0 },
  watchedVideos: { type: Number, default: 0 },
  blocked: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);
