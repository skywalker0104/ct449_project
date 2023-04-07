const Notification = require("../models/notification.model");

const createNoti = async (req, res) => {
  try {
    const { content, username, avatar, userId } = req.body;
    const newNoti = new Notification({
      content,
      username,
      avatar,
      userId,
    });
    await newNoti.save();
    res.json({ message: "Noti updated" });
  } catch (error) {
    console.log(error);
  }
};

const deleteNoti = async (req, res) => {
  try {
    const deletedNoti = await Notification.findOneAndDelete({
      _id: req.params.id,
    });
    if (deletedNoti) {
      res.json({ message: "Deleted!" });
    } else {
      res.json({ deletedNoti });
    }
  } catch (error) {
    console.log(error);
  }
};

const listNoti = async (req, res) => {
  try {
    const listNoti = await Notification.find({ userId: req.params.userId });
    if (listNoti) {
      res.json({ listNoti });
    } else {
      res.json({ message: "getnoti error" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createNoti,
  deleteNoti,
  listNoti,
};
