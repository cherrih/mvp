import React from 'react';
import Details from './Details/Details.jsx';
import About from './About/About.jsx';

const Home = (props) => {
  return (
    <div>
      <nav><h1>QUEER TRIP</h1></nav>
      <div className="main-container">
        <Details cities={props.cities}/>
        <About />
      </div>
    </div>
  )
}

export default Home;