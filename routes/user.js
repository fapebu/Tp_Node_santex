const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { validToken,adminToken } = require("../middleware/authentication");

router.post("/login",userController.login);

router.post("/",adminToken,userController.createUser);

router.get("/:userId",userController.getUser);

router.put("/:userId", adminToken, userController.modifyUser);

router.delete("/:userId", adminToken,userController.deleteUser);


module.exports = router;