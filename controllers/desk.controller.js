const Desks = require("../models/desk.model.js");

const createDesks = async (req, res) => {
  const { name, userId, status } = req.body;
  try {
    const newDesk = new Desks({
      name,
      userId,
      status,
      likes: 0,
      rates: 0,
    });
    await newDesk.save();
    res.json({ message: "Desk created!" });
  } catch (error) {
    console.log(error);
  }
};

const getDesk = async (req, res) => {
  try {
    const getDesk = await Desks.find({ id: req.params.id });
    if (getDesk) {
      res.json({ getDesk });
    } else {
      res.json({ message: "Get desk error" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateDesk = async (req, res) => {
  try {
    const { name, status } = req.body;
    const updatedDesk = await Desks.findOneAndUpdate(
      { id: req.params.id },
      { name },
      { status }
    );
    if (updatedDesk) {
      res.json({ updatedDesk });
    } else {
      res.json({ message: "Update desk fail!" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getDesk,
  createDesks,
  updateDesk,
};
