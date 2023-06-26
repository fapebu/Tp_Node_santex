const express = require("express");
const router = express.Router();
//const { bookController } = require("../controllers");
//const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth-mdw");

//router.post("/:bookId", userIsAdminMDW, bookController.createBook);

//router.get("/:bookId", jwtValidMDW, bookController.getBook);

router.get("/:userId", (req, res) => {
  console.log(`Book found with id ${req.params.userId}`);

  res.json({ id: req.params.userId });
});

module.exports = router;