const express = require('express');
const route = express.Router()
const controller = require('../controller/control')

const servis = require('../services/render')

route.get('/', servis.homeRoutes)

route.get('/user', servis.user)

route.get('/update', servis.update)

//api routes
route.post('/api/user', controller.create)
route.get('/api/user', controller.find)
route.put('/api/user/:id', controller.update)
route.delete('/api/user/:id', controller.delete)


module.exports = route
