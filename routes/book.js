const express = require("express");
const router = express.Router();
const { bookController } = require("../controllers");
//const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth-mdw");

router.post("/", bookController.createBook);

router.get("/:bookId", bookController.getBook);

router.get("/", bookController.getAllBook);

router.put("/:bookId", bookController.modifyBook);

router.delete("/:bookId", bookController.deleteBook);

module.exports = router;
