const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");


router.post("/login", userController.login);

router.post("/",userController.createUser);

router.get("/:userId", userController.getUser);

router.put("/:userId",  userController.modifyUser);

router.delete("/:userId", userController.deleteUser);


module.exports = router;