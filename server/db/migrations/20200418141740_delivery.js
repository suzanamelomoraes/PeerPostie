exports.up = knex =>
  knex.schema.createTable('delivery', (table) => {
    table.increments('id').primary()
    table.string('pickup_address')
    table.integer('pickup_latitude')
    table.integer('pickup_longitude')
    table.string('delivery_address')
    table.integer('delivery_latitude')
    table.integer('delivery_longitude')
    table.integer('transport').references('transport.id')
    table.integer('timeframe').references('timeframe.id')
    table.integer('request_user').references('users.id')
    table.integer('delivery_user')
    table.integer('price')
    table.string('status')
  })

exports.down = knex => knex.schema.dropTable('delivery')