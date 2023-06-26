const express = require("express");
const router = express.Router();

//const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth-mdw");

const { libraryController } = require("../controllers");
//const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth-mdw");

//router.post("/:bookId", userIsAdminMDW, bookController.createBook);

router.get("/:libraryId", libraryController.getLibrary);


module.exports = router;