const Comments = require("../models/comment.model");

const createComment = async (req, res) => {
  try {
    const { content, username, avatar, deskId } = req.body;
    const newComment = new Comments({
      content,
      username,
      avatar,
      deskId,
    });
    await newComment.save();
    res.json({ message: "User posted a new comment!" });
  } catch (error) {
    console.log(error);
  }
};

const getComment = async (req, res) => {
  try {
    const getComment = await Comments.find({ deskId: req.params.deskId });
    if (getComment) {
      res.json({ getComment });
    } else {
      res.json({ message: "Get comment error" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createComment, getComment };
