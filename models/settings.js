'use strict'
module.exports = (sequelize, DataTypes) => {
    var settings = sequelize.define('settings', {
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        },
        atPhoneNumber: {
            type: DataTypes.STRING,
            field: 'at_phone_number'
        },
        atApiKey: {
            type: DataTypes.STRING,
            field: 'at_api_key'
        },
        atUsername: {
            type: DataTypes.STRING,
            field: 'at_username'
        },
        atRingbackTone: {
            type: DataTypes.STRING,
            field: 'at_ringback_tone'
        }
    }, {})
    settings.associate = (models) => {
        // associations can be defined here
        settings.belongsTo(models.users)
    }
    return settings
}