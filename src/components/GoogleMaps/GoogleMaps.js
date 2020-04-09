import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function Maps(props) {

  const mapStyles = {
    height: '250px',
    width: '335px',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center'
  }
  
  return(
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 37.804363, lng: -122.271111}}
    />
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDNBi-BoOSmcefefjy27L0HCv2p_Y7F4xU'
})(Maps);