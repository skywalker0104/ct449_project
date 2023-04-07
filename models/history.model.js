const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
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

const Histories = mongoose.model("histories", historySchema);

module.exports = Histories;
