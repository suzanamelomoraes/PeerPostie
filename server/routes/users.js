const express = require('express')

const db = require('../db/users')

const router = express.Router()

const sendGenericErrorMessage = (res) => {
  res.status(500).send(
    "An unexpected error has occurred and we're looking into it"
  )
}

router.get('/', (req, res) => {
  const { userId } = req.body

  return db.getUserById(userId)
    .then(user => res.json(user))
    .catch(() => sendGenericErrorMessage(res))
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