const express = require('express')
const router = express.Router()
const models = require('../models/index')
const { Op } = require("sequelize");

router.get('/add', async (req, res) => {
    const obj = { username: 'username', name: 'name', color_id: 1 }
    const user = await models.User.create(obj)
    res.json(user)
})
router.get('/addcolor', async (req, res) => {
    const obj = { color: 'red' }
    const color = await models.Color.create(obj)
    res.json(color)
})

router.get('/findAll', async (req, res) => {
    const users = await models.User.findAll({
        attributes: ['id', 'username', 'name'],
        include: [{
            model: models.Color,
            attributes: ['id', 'color']
        }]
    })
    res.json(users)
})
router.get('/findAllColor', async (req, res) => {
    const colors = await models.Color.findAll({
    })
    res.json(colors)
})

router.get('/find/:id', async (req, res) => {
    const { id } = req.params
    const user = await models.User.findAll({
        where: {
            id,
        }
    })
    res.json(user)

})
router.get('/findColor/:id', async (req, res) => {
    const { id } = req.params
    const color = await models.Color.findAll({
        where: {
            id,
        }
    })
    res.json(color)

})


router.get('/deleteColor/:id', async (req, res) => {
    const { id } = req.params
    const color = await models.Color.findOne({ where: { id } })
    const deleteRow = await color.destroy()
    res.json(deleteRow)
})
module.exports = router