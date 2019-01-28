import React from 'react';

const Info = (props) => {
  return (
    <div className="nyc-info">
      <nav><div className="city-nav-title">Queertrip</div></nav>
      <div className="city-hero">
        <div className="city-header">NYC</div>
        <div className="city-country">United States</div>
        <div className="city-filters">
          <select className="city-select">
            <option value="NYC">NYC</option>
          </select>
          <select className="city-select" id="city-select-identity">
            <option value="LGBTQIA+">LGBTQIA+</option>
            <option value="Lesbian">Lesbian</option>
            <option value="Gay">Gay</option>
            <option value="Bisexual">Bisexual</option>
            <option value="Trans">Trans</option>
            <option value="Queer">Queer</option>
            <option value="Questioning">Questioning</option>
            <option value="+">+</option>
            <option value="Intersex">Intersex</option>
            <option value="Asexual">Asexual</option>
            <option value="Female-Owned">Female-Owned</option>
          </select>
          <select className="city-select" id="">
            <option value="All">All</option>
            <option value="Bars">Bars</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Events">Events</option>
            <option value="Stores">Stores</option>
          </select>
        </div>
      </div>
    </div>
  )
};

export default Info;
