'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("users", {
            id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            firstName: { type: Sequelize.STRING(40), allowNull: false },
            lastName: { type: Sequelize.STRING(30) },
            email: { type: Sequelize.STRING(300), unique: true, allowNull: false },
            password: { type: Sequelize.STRING(300), allowNull: false },
            //Those are added by default on insertion (make sure to create the their columns)
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("users");
    }
};