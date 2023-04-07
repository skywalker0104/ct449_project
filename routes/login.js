const express = require("express");
const {
  login,
  createUser,
  uploadAvatar,
} = require("../controllers/login.controller");
const { authenticate } = require("../middleware/authenticate");
const { uploadImg } = require("../middleware/uploadImg");
const router = express.Router();

router.post("/login", login);

router.post("/create-user", createUser);

router.post("/upload-avatar", authenticate, uploadImg("Avatar"), uploadAvatar);

module.exports = router;
