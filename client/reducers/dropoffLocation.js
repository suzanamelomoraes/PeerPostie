import { DROPOFF_LOCATION } from '../actions/dropoffLocation'

export default function dropoffLocation (state = [], action) {
  switch (action.type) {
    case DROPOFF_LOCATION:
      return action.address

    default:
      return state
  }
}