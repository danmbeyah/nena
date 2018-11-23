'use strict'
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        username: {
            type: DataTypes.STRING,
            field: 'username'
        },
        password: {
            type: DataTypes.STRING,
            field: 'password'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        phone: {
            type: DataTypes.STRING,
            field: 'phone'
        },
        fullName: {
            type: DataTypes.STRING,
            field: 'full_name'
        }
    }, {})
    users.associate = (models) => {
        // associations can be defined here
    }
    return users
}