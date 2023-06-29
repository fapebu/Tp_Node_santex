const express = require("express");
const router = express.Router();
const { libraryController, bookController } = require("../controllers");
//const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth-mdw");


router.post("/", libraryController.createLibrary);

router.get("/:libraryId", libraryController.getLibrary);

router.get("/", libraryController.getAllLibrary);

router.put("/:libraryId", libraryController.modifyLibrary);

router.delete("/:libraryId", libraryController.deleteLibrary);


router.post("/book/", bookController.createBook); // crear libro desde la libreria.

module.exports = router;