const storeModel = (sequelize, DataTypes) => {

    const store = sequelize.define('store', {
        storeName: {
            type: DataTypes.STRING
        },
        storeOwner: {
            type: DataTypes.STRING
        },
        storeAddress: {
            type: DataTypes.STRING
        },
        storePhone: {
            type: DataTypes.BIGINT
        }
    })

    return store

}

module.exports = storeModel