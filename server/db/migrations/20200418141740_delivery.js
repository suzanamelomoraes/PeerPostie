exports.up = knex =>
  knex.schema.createTable('delivery', (table) => {
    table.increments('id').primary()
    table.string('pick_up')
    table.string('deliver_to')
    table.string('expected_time')
    table.string('package_type')
      .references('package_type.id')
    table.string('request_maker')
      .references('users.id')
    table.integer('delivery_person')
      .references('users.id')
      table.integer('prices')
      .references('prices.id')
  })

exports.down = knex => knex.schema.dropTable('delivery')