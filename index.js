const express = require('express')
const app = express()
require('dotenv').config();

const addRoute = require('./routes/models')

app.use(addRoute)

const models = require('./models/index')


models.sequelize.sync({ alter: true }).then(() => {
    app.listen(5000);
});