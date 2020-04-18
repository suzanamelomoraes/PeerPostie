exports.up = knex =>
  knex.schema.createTable('prices', (table) => {
    table.increments('id').primary()
    table.numeric('bike')
    table.numeric('car')
    table.numeric('urgent')

  })

exports.down = knex => knex.schema.dropTable('prices')