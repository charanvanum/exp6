const bcrypt = require("bcrypt");
const { findUserByUsername } = require("../models/userStore");
const { generateToken } = require("../utils/tokenUtil");

const loginUser = async (req, res, next) => {

  try {

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password required"
      });
    }

    const user = findUserByUsername(username);

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = generateToken({
      userId: user.id,
      username: user.username,
      role: user.role
    });

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {
    next(error);
  }
};

const protectedRoute = (req, res) => {

  res.json({
    message: "Protected route accessed",
    user: req.user
  });

};

module.exports = {
  loginUser,
  protectedRoute
};