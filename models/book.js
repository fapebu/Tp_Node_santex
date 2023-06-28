const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/dbconfig");

const Book =  sequelize.define("Book",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        primaryKey: true,
    },
    isbn:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    titulo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    autor:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    year:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    library:{
        type:DataTypes.INTEGER,
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

module.exports = Book;