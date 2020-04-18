exports.up = knex =>
  knex.schema.createTable('package_type', (table) => {
    table.increments('id').primary()
    table.string('bike')
    .references('prices.id')
    table.string('car')
      .references('prices.id')
  })

exports.down = knex => knex.schema.dropTable('package_type')
