const express = require("express");
const { login, createUser } = require("../controllers/login.controller");
const router = express.Router();

router.post("/login", login);

router.post("/create-user", createUser);

module.exports = router;
