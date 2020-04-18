exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('delivery')()
    .then(empty('timeframe'))
    .then(empty('transport'))
    .then(empty('users'))
}