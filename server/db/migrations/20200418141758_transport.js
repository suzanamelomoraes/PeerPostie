exports.up = knex =>
  knex.schema.createTable('transport', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('additional_price')
  })

exports.down = knex => knex.schema.dropTable('transport')
