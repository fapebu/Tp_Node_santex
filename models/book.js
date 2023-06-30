const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/dbconfig");

const Book =  sequelize.define("Book",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate: {
            is: /^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\d-]+$/,     //validamos el formato del ISBN
            notEmpty: true,
        }
    },
    titulo:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty: true,
        }
    },
    autor:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty: true,
        }
    },
    year:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            is: /(?:(?:18|19|20|21)[0-9]{2})/,     //validamos el año
            notEmpty: true,
        }
    },
    library:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notEmpty: true,
            isNumeric: true,
        }
    },
    deletedAt:{
        type:DataTypes.TIME,
    },

}, 
{
    paranoid: true,
    timestamps: true
  });

module.exports = Book;