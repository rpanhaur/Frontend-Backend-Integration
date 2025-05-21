const { Sequelize, DataTypes } = require('sequelize');
const storeModel = require('../models/storeModel');
const sequelize = new Sequelize("postgresql://postgres.zjvordofvqyvjqtxriwj:rabindrapanhaur@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true")
sequelize.authenticate().then(() => {
    console.log('Database is Successfully connected');

}).catch((err) => {
    console.log('Database Error' + err);

})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.stores = storeModel(sequelize, DataTypes)

sequelize.sync({ alter: true }).then(() => {
    console.log('Database is Successfully Migrated');

})
module.exports = db
