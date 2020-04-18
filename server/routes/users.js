const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  //GET current user data
})

router.get(':id', (req, res) => {
  //GET delivery person details
})

router.put('/', (req, res) => {
  //PUT update current user profile
})

router.post('/', (req, res) => {
  //POST new user registration
})

module.exports = router