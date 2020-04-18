const connection = require('./connection')

function getUserById (id, db = connection) {
  return db('users')
    .where('id', id)
    .first()
}

module.exports = {
  getUserById
}