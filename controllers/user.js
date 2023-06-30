const { userService } = require("../services");

const login = async (req, res) => {
  try {
    const User = await userService.login(req.body);
    res.status(201).json({"token": User});
  } catch (err) {
   res.json({ action: "Login", error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const User = await userService.createUser(req.body);
    res.status(200).json(User);
  } catch (err) {
   res.json({ action: "createUser", error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const User = await userService.getUser(req.params.userId);
    res.status(200).json(User);
  } catch (err) {
   res.json({ action: "getUser", error: err.message });
  }
};

const modifyUser = async (req, res) => {
 try {
    const {id,isbn ,titulo, autor, year,library} = req.body; 
    const User = await userService.modifyUser(req.params.userId ,{id,isbn ,titulo, autor, year,library} );
    res.status(200).json(User);
  } catch (err) {
   res.json({ action: "modifyUser", error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const User = await userService.deleteUser(req.params.userId);
    res.status(200).json(User);
  } catch (err) {
   res.json({ action: "deleteUser", error: err.message });
  }
};


module.exports = {login,createUser,getUser, modifyUser,deleteUser};