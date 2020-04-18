import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export const PICKUP_LOCATION = 'PICKUP_LOCATION'
export const PICKUP_LATLNG = 'PICKUP_LATLNG'



export function addPickupLocation(address) {
  return function(dispatch) {
      return geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
          dispatch({
              type: PICKUP_LATLNG,
              latLng
          })
      })
      .then(()=> {
          dispatch({
           type:PICKUP_LOCATION,
           address
          })
      })
  }
}

