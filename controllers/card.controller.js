const Cards = require("../models/card.model");

const createCard = async (req, res) => {
  const { frontContent, backContent, deskId, imageUrl } = req.body;
  try {
    const newCard = new Cards({
      frontContent,
      backContent,
      deskId,
      imageUrl,
    });
    await newCard.save();
    res.json({ message: "Card created!" });
  } catch (error) {
    console.log(error);
  }
};

const getCardByDeskId = async (req, res) => {
  try {
    const getCard = await Cards.find({ deskId: req.params.deskId });
    if (getCard) {
      res.json({ getCard });
    } else {
      res.json({ message: "getcard error" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteCard = async (req, res) => {
  try {
    const deletedCard = await Cards.findOneAndDelete({ _id: req.params.id });
    if (deletedCard) {
      res.json({ message: "Deleted!" });
    } else res.json({ message: "Delete fail!" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCards = async (req, res) => {
  try {
    const { frontContent, backContent, imageUrl } = req.body;
    const updatedCard = await Cards.findOneAndUpdate(
      { id: req.params.id },
      { frontContent },
      { backContent },
      { imageUrl }
    );
    if (updatedCard) {
      res.json({ message: "Updated!" });
    } else res.json({ message: "Update fail!" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createCard,
  getCardByDeskId,
  deleteCard,
  updateCards,
};
