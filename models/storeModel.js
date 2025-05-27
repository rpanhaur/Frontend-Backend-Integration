const { BIGINT } = require("sequelize")

const storeModel = (sequelize, DataTypes) => {

    const store = sequelize.define('program', {

        sn: {
            type: BIGINT
        },
        programDetails: {
            type: DataTypes.STRING
        },
        inTime: {
            type: DataTypes.TIME
        },
        outTime: {
            type: DataTypes.TIME
        },
        duration: {
            type: DataTypes.TIME
        },
        remarks: {
            type: DataTypes.TEXT
        }
    })

    return store

}

module.exports = storeModel