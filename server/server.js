const path = require('path')
const express = require('express')
const cors = require('cors')

const users = require('./routes/users')
const delivery = require('./routes/delivery')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors())

server.use('api/users', users)
server.use('api/delivery', delivery)

module.exports = server
