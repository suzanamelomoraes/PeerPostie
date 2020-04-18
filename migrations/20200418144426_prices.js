exports.up = knex =>
  knex.schema.createTable('prices', (table) => {
    table.increments('id').primary()
    table.string('bike')
    table.string('car')
    table.string('urgent')

  })

exports.down = knex => knex.schema.dropTable('prices')