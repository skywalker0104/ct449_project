const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "giakinhgiakinhehe");
    if (decode) {
      req.user = decode;
      next();
    } else {
      res.status(401).send("Can not login!");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = verifyToken;
