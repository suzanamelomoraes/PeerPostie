
exports.seed = function(knex) {
  return knex('timeframe').insert([
    {id: 1, name: 'urgent', additional_price: 0},
    {id: 2, name: 'today', additional_price: 3}
  ])
}
