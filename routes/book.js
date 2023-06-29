const express = require("express");
const router = express.Router();
const { bookController } = require("../controllers");
const { validToken } = require("../middleware/authentication");

router.post("/", validToken,bookController.createBook);

router.get("/:bookId", bookController.getBook);

router.get("/", bookController.getAllBook);

router.put("/:bookId", validToken, bookController.modifyBook);

router.delete("/:bookId",validToken, bookController.deleteBook);

module.exports = router;
