exports.up = knex =>
  knex.schema.createTable('timeframe', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('additional_price')

  })

exports.down = knex => knex.schema.dropTable('timeframe')