require('dotenv').config();
const path = require('path')
const Sequelize = require('sequelize')
const database = process.env.database
const user = process.env.user
const password = process.env.password
const host = process.env.host
const sequelize = new Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
    // logging: false
})

const models = {
    User: require(path.join(__dirname, './User'))(sequelize, Sequelize.DataTypes),
    Color: require(path.join(__dirname, './Color'))(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models