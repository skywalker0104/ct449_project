const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
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

const Likes = mongoose.model("likes", likeSchema);

module.exports = Likes;
