import React from 'react';
import Search from './Search.jsx';
import Featured from './Featured.jsx';
import CityList from './CityList/CityList.jsx';

const Details = (props) => {
  return (
    <div id="details-body">
      <div className="details-heading">  Helping queerdos <br/> travel queerer. </div>
      <Search />
      <Featured />
      <CityList cities={props.cities}/>
    </div>
  )
};

export default Details;