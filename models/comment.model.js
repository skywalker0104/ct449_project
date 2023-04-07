const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
  },
  username: {
    type: String,
  },
  avatar: {
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

const Comments = mongoose.model("comments", commentSchema);

module.exports = Comments;
