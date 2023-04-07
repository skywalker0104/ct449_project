const express = require("express");
const {
  createNoti,
  deleteNoti,
  listNoti,
} = require("../controllers/notification.controller");
const notiRouter = express.Router();

notiRouter.get("/noti/:userId", listNoti);
notiRouter.post("/noti/create", createNoti);
notiRouter.delete("/noti/:id", deleteNoti);

module.exports = notiRouter;
