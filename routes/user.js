const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
//const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth-mdw");
const jwt = require("jsonwebtoken");
//router.post("/", userController.login);
router.post("/", async (req, res) => {
  const { user, pass } = req.body;

  if (user === "admin" && pass === "admin") {
    const token = jwt.sign({ user, role: "Admin" }, SERVER_SECRET, {});
    res.json({ token });
  } /*else {
    const userFound = await userService.validateUser(user, pass);
    if (userFound) {
      const token = jwt.sign({ user, role: "User" }, SERVER_SECRET, {
        expiresIn: "1m",
      });
      return res.json({ token });
    }
    res.status(401).json({ error: "Invalid User" });
  }*/
});

module.exports = router;
module.exports = router;