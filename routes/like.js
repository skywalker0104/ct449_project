const express = require("express");
const { userLike, userUnlike } = require("../controllers/like.controller");
const likeRouter = express.Router();

likeRouter.post("/likedesk", userLike);
likeRouter.delete("/unlikedesk", userUnlike);

module.exports = likeRouter;
