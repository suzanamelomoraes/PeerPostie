const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  const userId = req.body.id

  return db.getUserById(userId) //need to import and create
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