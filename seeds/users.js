
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Charles', address: 'Auckland University of Technology', phone:'0220123456',email:'charles@gmail.com', payment_details:'012345600', rating:'4', password:'12345', latitude:'36.8532', longitude:'174.7673', status:'1',},
        {id: 2, name: 'Flying', address: 'The Coffee Dress', phone:'0220123457',email:'flying@gmail.com', payment_details:'012345603', rating:'4', password:'12345', latitude:'36.8531', longitude:'174.7673', status:'2',},
        {id: 3, name: 'Summer', address: 'AUT - WB Building', phone:'0220123458',email:'summer@gmail.com', payment_details:'012345604', rating:'4', password:'12345', latitude:'36.8532', longitude:'174.7673', status:'2',},
      ]);
    });
};
