const express = require("express");
const {
  createComment,
  getComment,
} = require("../controllers/comment.controller");
const commentRouter = express.Router();

commentRouter.get("/comment/:deskId", getComment);
commentRouter.post("/comment/create", createComment);

module.exports = commentRouter;
