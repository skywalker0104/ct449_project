const Rates = require("../models/rate.model");

const userRateDesk = async (req, res) => {
  try {
    const { star, userId, deskId } = req.body;
    const newRate = new Rates({
      star,
      userId,
      deskId,
    });
    await newRate.save();
    res.json({ message: "User rated this desk!" });
  } catch (error) {
    console.log(error);
  }
};

const deleteRate = async (req, res) => {
  try {
    const deletedRate = await Rates.findOneAndDelete({
      _id: req.params.id,
    });
    if (deletedRate) {
      res.json({ message: "Deleted!" });
    } else {
      res.json({ message: "Delete failed!" });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateRate = async (req, res) => {
  try {
    const { star } = req.body;
    const updatedRate = await Rates.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { star }
    );
    if (updatedRate) {
      res.json({ message: "Updated!" });
    } else {
      res.json({ message: "Update failed!" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userRateDesk, deleteRate, updateRate };
