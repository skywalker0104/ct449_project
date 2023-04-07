const express = require("express");
const pushNewHistory = require("../controllers/history.controller");
const historyRouter = express.Router();

historyRouter.post("/history", pushNewHistory);

module.exports = historyRouter;
