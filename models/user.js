const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/dbconfig");

const User =  sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        primaryKey: true,
        autoIncrement: true,
    },
    user:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    pass:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    deletedAt:{
        type:DataTypes.TIME,
    },
 }, 
{
    paranoid: true,
    timestamps: true
  });

  
module.exports = User;