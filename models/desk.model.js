const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deskSchema = new Schema({
  name: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  likes: {
    type: Number,
  },
  rates: {
    type: Number,
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Desks = mongoose.model("desks", deskSchema);

module.exports = Desks;
