const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  //GET all open requests
})

router.get(':id', (req, res) => {
  //GET details specific request
})

router.get('/user', (req, res) => {
  //GET all tasks related to current user
})

router.post('/', (req, res) => {
  //POST add new request
})

router.put('/accept', (req, res) => {
  //PUT change status to in progress, add userID to deliverer column
})

router.put('/complete', (req, res) => {
  //PUT change status to complete, compute and change new rating for users
})

router.delete('/', (req, res) => {
  //DELETE delete chosen task
})

module.exports = router