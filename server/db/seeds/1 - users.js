
exports.seed = function(knex) {
  return knex('users').insert([
    {id: 1, first_name: 'Charles', last_name: 'Garcia', address: '310 Onehunga Mall, Onehunga, Auckland 1061', phone:'0220123456', email:'charles@gmail.com', rating:'4', latitude: -36.918700, longitude: 174.784549},
    {id: 2, first_name: 'Francis', last_name: 'Xavier', address: '1 Park Gardens, Onehunga, Auckland 1061', phone:'0220123457', email:'flying@gmail.com', rating:'5', latitude: -36.917066, longitude: 174.780688},
    {id: 3, first_name: 'Joana', last_name: 'Bloggs', address: '61 Selwyn Street, Onehunga, Auckland 1061', phone:'0220123458', email:'summer@gmail.com', rating:'4.5', latitude: -36.921724, longitude: 174.783307},
  ])
}
