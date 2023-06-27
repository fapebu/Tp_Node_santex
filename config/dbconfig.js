const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const initializeDB = async ()=> {
    try {
        await sequelize.authenticate();
        console.log("conexion a base de datos exitosa");
        await sequelize.sync({force: false});
    } catch (error) {
        console.log("se produjo un error al inicializar la base de datos");
    }
}

module.exports = {sequelize, initializeDB};