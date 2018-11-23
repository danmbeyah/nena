'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('settings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                allowNull: false,
                field: 'user_id',
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            atPhoneNumber: {
                type: Sequelize.STRING,
                field: 'at_phone_number'
            },
            atApiKey: {
                type: Sequelize.STRING,
                field: 'at_api_key',
            },
            atUsername: {
                type: Sequelize.STRING,
                field: 'at_username',
            },
            atRingbackTone: {
                type: Sequelize.STRING,
                field: 'at_ringback_tone',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'created_at',
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'updated_at',
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('settings')
    }
}