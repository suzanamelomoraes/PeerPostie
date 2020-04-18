import React, { Component} from 'react'
import { connect }from 'react-redux'

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import { addPickupLocation } from '../actions/pickupLocation'

export class PickupLocation extends Component {
  constructor (props) {
    super(props)
    this.state = { address: '' }
  }

    handleChange = address => {
      this.setState({ address })
      }

    handleSelect = address => {
      this.setState({ address })
    geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(({lat, lng}) => {
        this.props.addPickupLocation([address,lat,lng])
        })       
        .catch(error => console.error('Error', error));
    }

    render () {
      return (
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'From ...',
                  className: 'location-search-input'
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item'
                      // inline style for demonstration purpose
                      const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' }
                      return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  )
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete> 
          )
    }
}

const matchDispatchToProps = {
  addPickupLocation
}

//export default PickupLocation
export default connect(null, matchDispatchToProps)(PickupLocation)
