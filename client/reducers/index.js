import { combineReducers } from "redux"

import error from "./error"
import pickupLocation from './pickupLocation'
import dropoffLocation from './dropoffLocation'

export default combineReducers({
  error,
  pickupLocation,
  dropoffLocation
})