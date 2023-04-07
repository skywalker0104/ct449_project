const Users = require("../models/user.model.js");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await Users.findOne({ username: username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Sai tên đăng nhập hoặc mật khẩu!",
      });
    }
    const verifyPassword = await argon2.verify(user.password, password);
    if (!verifyPassword) {
      return res.status(400).json({
        success: false,
        message: "Sai tên đăng nhập hoặc mật khẩu!",
      });
    } else {
      const accessToken = jwt.sign(
        {
          userId: user._id,
        },
        "giakinhgiakinhehe"
      );
      if (user.role == "user") {
        res.json({
          success: true,
          message: "Đăng nhập vào tài khoản người dùng thành công",
          username,
          email: user.email,
          phone: user.phone,
          role: user.role,
          avatar: user.avatar,
          accessToken,
        });
      } else {
        res.json({
          success: true,
          message: "Đăng nhập vào tài khoản Admin thành công",
          username,
          email,
          phone,
          role: user.role,
          avatar,
          accessToken,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  const { username, email, phone, password, role, avatar } = req.body;
  try {
    const user = await Users.findOne({ username });
    if (user)
      return res.status(400).json({
        success: false,
        message: "Tên đăng nhập đã tồn tại!",
      });
    const hashedPassword = await argon2.hash(password);
    const newUser = new Users({
      username,
      email,
      phone,
      password: hashedPassword,
      role: role,
    });
    await newUser.save();

    const accessToken = jwt.sign(
      {
        userId: newUser._id,
      },
      "giakinhgiakinhehe"
    );

    res.json({
      success: true,
      message: "Tạo tài khoản thành công",
      accessToken,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
  createUser,
};
