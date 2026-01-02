const router = require("express").Router();
const Video = require("../models/Video");
const User = require("../models/User");

router.get("/", async (req, res) => {
  const videos = await Video.find({ approved: true });
  res.json(videos);
});

router.post("/watch/:id", async (req, res) => {
  const user = await User.findById(req.body.userId);
  user.coins += 1;
  user.watchedVideos += 1;
  await user.save();
  res.json({ coins: user.coins });
});

module.exports = router;
