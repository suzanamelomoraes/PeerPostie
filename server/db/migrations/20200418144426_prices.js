exports.up = knex =>
  knex.schema.createTable('prices', (table) => {
    table.increments('id').primary()
    table.integer('bike')
    table.integer('car')
    table.integer('urgent')

  })

exports.down = knex => knex.schema.dropTable('prices')