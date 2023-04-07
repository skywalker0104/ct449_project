const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  frontContent: {
    type: String,
  },
  backContent: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  deskId: {
    type: Schema.Types.ObjectId,
    ref: "desks",
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Cards = mongoose.model("cards", cardSchema);

module.exports = Cards;
