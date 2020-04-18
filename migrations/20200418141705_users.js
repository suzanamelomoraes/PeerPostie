
exports.up = knex =>
knex.schema.createTable('users', (table) => {
  table.increments('id').primary()
  table.string('name')
  table.string('address')
  table.integer('phone')
  table.string('email')
  table.integer('payment_details')
  table.integer('rating')
  table.string('password')
  table.integer('latitude')
  table.integer('longitude')
  table.string('status')
    .references('status.id')
})

exports.down = knex => knex.schema.dropTable('users')
