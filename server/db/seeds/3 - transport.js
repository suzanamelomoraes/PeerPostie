
exports.seed = function(knex) {
  return knex('transport').insert([
    {id: 1, name: 'person', additional_price: 0},
    {id: 2, name: 'vehicle', additional_price: 3}
  ])
}
