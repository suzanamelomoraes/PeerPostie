import { PICKUP_LOCATION, PICKUP_LATLNG } from '../actions/pickupLocation'

export default function pickupAddress (state = [], action) {
  switch (action.type) {
    case PICKUP_LOCATION:
      return action.address

    default:
      return state
  }
}

export function pickupLatLng (state = [], action) {
  switch (action.type) {
    case PICKUP_LATLNG:
      return action.latLng
      
    default:
      return state
  }
}