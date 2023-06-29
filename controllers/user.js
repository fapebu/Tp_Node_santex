const { userService } = require("../services");

const login = async (req, res) => {
  try {
    const User = await userService.login(req.body);
    res.status(201).json(User);
  } catch (err) {
    res.status(400).json({ action: "Login", error: err.message });
  }
};

module.exports = login;