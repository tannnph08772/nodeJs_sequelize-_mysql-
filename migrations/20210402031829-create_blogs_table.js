"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("blogs", {
            id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            content: Sequelize.STRING(300),
            userId: Sequelize.INTEGER(11),
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },

    down: (queryInterface, Sequelize) => {
        //Return a promise that drops a table in case of (migration:undo)
        return queryInterface.dropTable("blogs");
    }
};