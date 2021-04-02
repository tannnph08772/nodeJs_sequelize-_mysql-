const Sequelize = require("sequelize");
const sequelize = require('../database/connection')

const blog = sequelize.define("Blog", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    content: Sequelize.STRING(300)
});
module.exports = blog;