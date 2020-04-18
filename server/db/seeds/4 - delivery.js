
exports.seed = function(knex) {
  return knex('delivery').insert([
    {
      id: 1,
      pickup_address: '310 Onehunga Mall, Onehunga, Auckland 1061',
      pickup_latitude: -36.918700,
      pickup_longitude: 174.784549,
      delivery_address: '1 Park Gardens, Onehunga, Auckland 1061',
      delivery_latitude: -36.917066,
      delivery_longitude: 174.780688,
      transport: 1,
      timeframe: 1,
      request_user: 1,
      status: 'open'
    },
    {
      id: 2,
      pickup_address: '310 Onehunga Mall, Onehunga, Auckland 1061',
      pickup_latitude: -36.918700,
      pickup_longitude: 174.784549,
      delivery_address: '61 Selwyn Street, Onehunga, Auckland 1061',
      delivery_latitude: -36.921724,
      delivery_longitude: 174.783307,
      transport: 1,
      timeframe: 2,
      request_user: 1,
      delivery_user: 2,
      price: 8,
      status: 'in progress'
    },
    {
      id: 3,
      pickup_address: '310 Onehunga Mall, Onehunga, Auckland 1061',
      pickup_latitude: -36.918700,
      pickup_longitude: 174.784549,
      delivery_address: '1 Park Gardens, Onehunga, Auckland 1061',
      delivery_latitude: -36.917066,
      delivery_longitude: 174.780688,
      transport: 1,
      timeframe: 1,
      request_user: 1,
      delivery_user: 3,
      price: 5,
      status: 'completed'
    },
    {
      id: 4,
      pickup_address: '310 Onehunga Mall, Onehunga, Auckland 1061',
      pickup_latitude: -36.918700,
      pickup_longitude: 174.784549,
      delivery_address: '61 Selwyn Street, Onehunga, Auckland 1061',
      delivery_latitude: -36.921724,
      delivery_longitude: 174.783307,
      transport: 2,
      timeframe: 1,
      request_user: 1,
      delivery_user: 2,
      price: 8,
      status: 'completed'
    },
    {
      id: 5,
      pickup_address: '310 Onehunga Mall, Onehunga, Auckland 1061',
      pickup_latitude: -36.918700,
      pickup_longitude: 174.784549,
      delivery_address: '1 Park Gardens, Onehunga, Auckland 1061',
      delivery_latitude: -36.917066,
      delivery_longitude: 174.780688,
      transport: 2,
      timeframe: 2,
      request_user: 1,
      delivery_user: 3,
      price: 11,
      status: 'completed'
    }
  ])
}
