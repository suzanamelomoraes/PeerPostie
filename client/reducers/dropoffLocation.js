import { DROPOFF_LOCATION, DROPOFF_LATLNG } from '../actions/dropoffLocation'

export function dropoffAddress (state = [], action) {
  switch (action.type) {
    case DROPOFF_LOCATION:
      return action.address
      
    default:
      return state
  }
}

export function dropoffLatLng (state = [], action) {
  switch (action.type) {
    case DROPOFF_LATLNG:
      return action.latLng
      
    default:
      return state
  }
}