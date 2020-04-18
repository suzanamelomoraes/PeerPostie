
exports.up = knex =>
knex.schema.createTable('users', (table) => {
  table.increments('id').primary()
  table.string('first_name')
  table.string('last_name')
  table.string('address')
  table.integer('phone')
  table.string('email')
  table.integer('rating')
  table.integer('latitude')
  table.integer('longitude')
})

exports.down = knex => knex.schema.dropTable('users')
