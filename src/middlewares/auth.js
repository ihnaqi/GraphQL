const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization || "";

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } catch (error) {
    console.log(`Unable to authenticate using token: ${token}`);
  }
  next();
};

module.exports = authMiddleware;
