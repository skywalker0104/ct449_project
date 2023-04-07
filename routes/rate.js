const express = require("express");
const {
  updateRate,
  userRateDesk,
  deleteRate,
} = require("../controllers/rate.controller");
const rateRouter = express.Router();

rateRouter.post("/rate/create", userRateDesk);
rateRouter.put("/rate/update/:id", updateRate);
rateRouter.delete("/rate/delete/:id", deleteRate);

module.exports = rateRouter;
