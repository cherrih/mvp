import React from 'react';
import Info from './Info.jsx';
import Map from './Map.jsx';

const NewYorkCity = (props) => {
  console.log("i'm in newyork")
  return (
    <div className="nyc-container">
      <Info/>
      <Map/>
    </div>
  )
}

export default NewYorkCity;
