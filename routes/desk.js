const express = require("express");
const {
  getDesk,
  createDesks,
  updateDesk,
} = require("../controllers/desk.controller");
const deskRouter = express.Router();

deskRouter.get("/desk/:id", getDesk);
deskRouter.post("/desk/create", createDesks);
deskRouter.put("/desk/update/:id", updateDesk);

module.exports = deskRouter;
