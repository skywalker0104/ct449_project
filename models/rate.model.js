const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rateSchema = new Schema({
  star: {
    type: Number,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
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

const Rates = mongoose.model("rates", rateSchema);

module.exports = Rates;
