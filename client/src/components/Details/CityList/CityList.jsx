import React from 'react';

const CityList = (props) => {
  return(
    <div id="city-list">
      <h2>Cities by ranking</h2>
      <div>{props.cities.map((city, i) => {
        return <div key={i} className="city-list-cities">{city.name}</div>
      })}</div>
    </div>
  )
}

export default CityList;