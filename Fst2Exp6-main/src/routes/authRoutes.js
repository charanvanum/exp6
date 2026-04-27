const express = require("express");

const router = express.Router();

const { loginUser, protectedRoute } = require("../controllers/authController");
const verifyJWT = require("../middleware/authMiddleware");

router.post("/login", loginUser);

router.get("/protected", verifyJWT, protectedRoute);

router.post("/logout", (req, res) => {
  res.json({
    message: "Logout successful. Delete token client side."
  });
});

module.exports = router;