
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('package_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('package_type').insert([
        {id: 1, bike: 1, car: 2}
      ]);
    });
};
