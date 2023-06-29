const { userModel } = require("../models");


const login = async (user,pass) => {
       const validate = await userModel.findAll({where: {
            user: user,
            pass: pass
          }});
        if(validate.length !== 0){
          return true;
      }else{
        throw new Error('Usuario y/o Contraseña no validos');
      }
      };
      const createUser = async (user) => {
        const newUser = await userModel.create(user);
        return newUser;
    };
    
    const getUser = async (user) => {
      const dataUser = await userModel.findAll({where: {
        user: user,
       }});
      if(dataUser.length !== 0){
        const {id, user} = dataUser[0].dataValues;
        
        return {"id":id, "user":user};
      }else{
        throw new Error('Usuario no valido');
      }
      };
    
    
    const modifyUser = async (userId, data) => {
      const user = await userModel.update(data, {
        where :  {id : userId}
        },);
      return userModel.findByPk(userId);
    };
    
    
    const deleteUser = async (userId) => {
      const user = await userModel.destroy({
        where: {
          id : userId
        },
        force: false
      });
      return user;
    };
    
module.exports = {login,createUser,getUser, modifyUser,deleteUser };