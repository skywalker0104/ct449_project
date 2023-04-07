const Histories = require("../models/history.model");

const pushNewHistory = async (req, res) => {
  try {
    const { userId, deskId } = req.body;
    await Histories.findOneAndDelete({
      userId: req.params.userId,
      deskId: req.params.deskId,
    });
    const newHistory = new Histories({
      userId,
      deskId,
    });
    newHistory.save();
    res.json({ message: "History updated" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = pushNewHistory;
