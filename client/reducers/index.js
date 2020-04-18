import { combineReducers } from "redux"

import error from "./error"
import { pickupAddress, pickupLatLng} from './pickupLocation'
import { dropoffAddress,dropoffLatLng} from './dropoffLocation'

export default combineReducers({
  error,
  pickupLatLng,
  pickupAddress,
  dropoffAddress,
  dropoffLatLng
})