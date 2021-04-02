const Sequelize = require("sequelize");
const sequelize = require('../database/connection')

const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING(35),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(35)
    },
    email: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
});

module.exports = User;