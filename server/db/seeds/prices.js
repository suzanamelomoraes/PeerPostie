
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prices').del()
    .then(function () {
      // Inserts seed entries
      return knex('prices').insert([
        {id: 1, bike: '4'},
        {id: 2, car: '6'},
        {id: 3, urgent: '3'}
      ]);
    });
};
