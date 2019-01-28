import React from 'react';
import Info from './Info.jsx';
import MapContainer from './Map/MapContainer.jsx';

const NewYorkCity = (props) => {
  return (
    <div className="nyc-container">
      <Info/>
      <MapContainer/>
    </div>
  )
}

export default NewYorkCity;
