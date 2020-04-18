import request from 'superagent'

const apiURL = 'http://localhost:3000/api/delivery'

export function addDelivery(delivery){
    return request
    .post(apiURL)
    .send(delivery)
    .then(res => res.body)
    .catch(err =>{
      throw new Error(err.message) 
    })
}