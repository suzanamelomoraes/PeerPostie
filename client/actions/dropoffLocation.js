import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export const DROPOFF_LOCATION = 'DROPOFF_LOCATION'
export const DROPOFF_LATLNG = 'DROPOFF_LATLNG'

export function addDropoffLocation(address) {
    return function(dispatch) {
        return geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
            dispatch({
                type: DROPOFF_LATLNG,
                latLng
            })
        })
        .then(()=> {
            dispatch({
             type:DROPOFF_LOCATION,
             address
            })
        })
}
}