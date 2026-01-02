const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  url: String,
  approved: { type: Boolean, default: false }
});

module.exports = mongoose.model("Video", VideoSchema);
