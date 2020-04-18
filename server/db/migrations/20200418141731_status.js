exports.up = knex =>
  knex.schema.createTable('status', (table) => {
    table.increments('id').primary()
    table.string('requester')
    table.string('deliverer')
  })

exports.down = knex => knex.schema.dropTable('status')