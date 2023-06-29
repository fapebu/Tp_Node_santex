const express = require("express");
const router = express.Router();
const { libraryController, bookController } = require("../controllers");
const { validToken } = require("../middleware/authentication");


router.post("/", validToken,libraryController.createLibrary);

router.get("/:libraryId", libraryController.getLibrary);

router.get("/", libraryController.getAllLibrary);

router.put("/:libraryId", validToken,libraryController.modifyLibrary);

router.delete("/:libraryId",validToken, libraryController.deleteLibrary);


router.post("/book/",validToken, bookController.createBook); // crear libro desde la libreria.

module.exports = router;