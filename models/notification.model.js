const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  content: {
    type: String,
  },
  username: {
    type: String,
  },
  avatar: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Notifications = mongoose.model("notifications", notificationSchema);

module.exports = Notifications;
