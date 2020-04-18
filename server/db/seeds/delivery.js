
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('delivery').del()
    .then(function () {
      // Inserts seed entries
      return knex('delivery').insert([
        {id: 1, pick_up: '', deliver_to:'',expected_time:'', package_type:'', request_maker:1, delivery_person:2, prices:1},
      ]);
    });
};
