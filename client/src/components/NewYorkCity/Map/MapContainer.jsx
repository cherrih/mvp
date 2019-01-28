import React from 'react';
import apiKey from './apiconfig.js';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 40.725211,
        lng: -73.962430
      },
      zoom: 13
    }
  }
  render () {
    return (
      <div id="map-container">
        {/* <Map
          id="nyc-map"
          google={this.props.google}
          zoom={13}
          initialCenter={{
          lat: 40.695954,
          lng: -73.905200
          }}
        /> */}
        <GoogleMapReact
          bootstrapURLKeys={{key: apiKey}}
          defaultCenter={ this.state.center }
          defaultZoom={ this.state.zoom }>
        </GoogleMapReact>
      </div>
    )
  }
};

// export default GoogleApiWrapper({
//   apiKey: apiKey
// })(MapContainer);

export default MapContainer;