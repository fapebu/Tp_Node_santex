const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/dbconfig");
const book = require("./book");
const Library =  sequelize.define("Library",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        primaryKey: true,
        autoIncrement:true,
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty: true,
        }
    },
    location:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty: true,
        }
    },
    telefono:{
        type:DataTypes.STRING,
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

  Library.hasMany(book,{
                    foreignKey: 'library',   //creamos la clave foranea pero me crea igual el LibraryID.
                    });
  book.belongsTo(Library);

module.exports = Library;