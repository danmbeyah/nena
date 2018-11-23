'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            username: {
                type: Sequelize.STRING,
                field: 'username'
            },
            password: {
                type: Sequelize.STRING,
                field: 'password'
            },
            email: {
                type: Sequelize.STRING,
                field: 'email'
            },
            phone: {
                type: Sequelize.STRING,
                field: 'phone'
            },
            fullName: {
                type: Sequelize.STRING,
                field: 'full_name'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'created_at'
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'updated_at'
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users')
    }
}