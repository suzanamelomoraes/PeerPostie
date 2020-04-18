import { PICKUP_LOCATION } from '../actions/pickupLocation'

export default function dropoffLocation (state = [], action) {
  switch (action.type) {
    case PICKUP_LOCATION:
      return action.address

    default:
      return state
  }
}