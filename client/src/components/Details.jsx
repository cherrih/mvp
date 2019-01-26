import React from 'react';
import Search from './Search.jsx';
import Featured from './Featured.jsx';
import CityList from './CityList.jsx';

const Details = (props) => {
  return (
    <div id="details-body">
      <div className="details-heading">  Helping queerdos <br/> travel queerer. </div>
      <Search />
      <Featured />
      <CityList />
    </div>
  )
};

export default Details;