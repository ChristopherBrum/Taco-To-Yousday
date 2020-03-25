import React, { Component } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import '/Map.css';

class Map extends Component {
  render() {
     return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyDnevrK7pRG0LpDE1FU1NZB2xZpAWT7F4c"
        {...other props}
      >
        <GoogleMap
          id='example-map'
          {...other props }
        >
          ...Your map components
        </GoogleMap>
      </LoadScript>
     )
  }
}

export default Map;