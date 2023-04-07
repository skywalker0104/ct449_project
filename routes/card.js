const express = require("express");
const {
  createCard,
  getCardByDeskId,
  deleteCard,
  updateCards,
} = require("../controllers/card.controller");
const cardRouter = express.Router();

cardRouter.post("/card/create", createCard);
cardRouter.get("/card/:deskId", getCardByDeskId);
cardRouter.delete("/card/delete/:id", deleteCard);
cardRouter.put("/card/update/:id", updateCards);

module.exports = cardRouter;
