const Likes = require("../models/like.model.js");

const userLike = async (req, res) => {
  try {
    const { userId, deskId } = req.body;
    const newLike = new Likes({
      userId,
      deskId,
    });
    await newLike.save();
    res.json({ message: "User liked this desk!" });
  } catch (error) {
    console.log(error);
  }
};

const userUnlike = async (req, res) => {
  try {
    const { userId, deskId } = req.body;
    await Likes.findOneAndDelete({
      userId: req.params.userId,
      deskId: req.params.deskId,
    });
    res.json({ message: "User unliked this desk!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userLike,
  userUnlike,
};
