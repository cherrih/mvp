import React from 'react';
import Search from './Search.jsx';
import Featured from './Featured.jsx';
import CityList from './CityList/CityList.jsx';

const Details = (props) => {
  return (
    <div id="details-body">
      <div id="details-top">
        <div className="details-heading">  Helping queerdos <br/> travel queerer. </div>
        <Search handleSubmit={props.handleSubmit}/>
        <img id="contact" src="https://s3-us-west-1.amazonaws.com/queertrip/contact.png"/>
        <img id="collabo" src="https://s3-us-west-1.amazonaws.com/queertrip/collabo.png"/>
        <img id="why" src="https://s3-us-west-1.amazonaws.com/queertrip/why.png"/>
      </div>
      <CityList cities={props.cities} handleCityClick={props.handleCityClick}/>
      <div className="orgs">
        <div>
          Here's a short list of organizations doing work to support queer and trans people, with special consideration for: youth empowerment, homelessness, mental health, incarceration, and structural racism. We are not partners with any of them, we just believe in their work.
        </div>
        <img src="https://s3-us-west-1.amazonaws.com/queertrip/Rainbow.png"/>
      </div>
    </div>
  )
};

export default Details;