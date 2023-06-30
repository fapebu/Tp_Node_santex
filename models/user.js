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
        unique:true,
        validate: {
            notEmpty: true,
        }
    },
    pass:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            is: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/,     //validamos que sean 8 caracteres 1 MAYUS 1 min 1 numero
            notEmpty: true,
        }
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty: true,
            control(value) {
                if (value !== 'user' && value !== 'admin' ) {
                    throw new Error('Role no valido');
                }
            }}
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