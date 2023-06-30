const jwt = require("jsonwebtoken");
const { userProvider } = require("../providers");
const  {secret}  = require("../middleware/authentication");

const login = async (User) => {

  const { user, pass } = User;

  if (user === "admin" && pass === "admin") {
    const token = jwt.sign({ user, role: "Admin" }, secret, {});
    return token;
  } else {
    const userFound = await userProvider.login(user, pass);
    if (userFound) {
      const token = jwt.sign({ user, role: "User" }, secret);
      return token ;
    }
    res.status(401).json({ error: "Invalid User" });
  }
    
  };
  const createUser = async (user) => {
    return await userProvider.createUser(user);
  
    };
  
  const getUser = async (userId) => {
    const user = await userProvider.getUser(userId);
    console.log(user);
    return user;
  };
  
  const modifyUser = async (userId,data) => {
    const user = await userProvider.modifyUser(userId,data);
    return user;
  };
  
  
  const deleteUser = async (userId) => {
    const user = await userProvider.deleteUser(userId);
    if (user) {
      // Lgica de negocio
      console.log(user.firstName);
    }
    return user;
  };
  

  module.exports = {login,createUser,getUser,modifyUser,deleteUser};