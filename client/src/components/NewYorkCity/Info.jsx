import React from 'react';

const Info = (props) => {
  return (
    <div className="nyc-info">
      <nav><div className="city-nav-title">Queertrip</div></nav>
      <div className="city-hero">
        <div className="city-header">NYC</div>
        <div className="city-country">United States</div>
        <div className="city-filters">
          <select className="city-select" id="city-select-city">
            <option value="NYC">NYC</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Wellington">Wellington</option>
            <option value="Quito">Quito</option>
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
          <select className="city-select" id="city-select-category">
            <option value="All">All</option>
            <option value="Bars">Bars</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Events">Events</option>
            <option value="Stores">Stores</option>
          </select>
        </div>
      </div>
      <div className="city-facts">
        <div id="queerdar" className="city-facts-item">
          <img src="https://s3-us-west-1.amazonaws.com/queertrip/Rainbow.png"/>
          <div id="city-queerdar">queerdar</div>
          <div>100%</div>
        </div>
        <div id="weather" className="city-facts-item">
          <img src="https://s3-us-west-1.amazonaws.com/queertrip/cloud.png"/>
          <div>weather -10C</div>
          <div>snowy AF</div>
        </div>
        <div id="cost" className="city-facts-item">
          <img src="https://s3-us-west-1.amazonaws.com/queertrip/Money.png"/>
          <div>cost per day $140 USD</div>
          <div>expensive AF</div>
        </div>
      </div>
      <div className="city-description">
        Neutra normcore vice, schlitz scenester affogato duis consectetur la croix irure tousled swag tofu. Yuccie tumeric slow-carb, dolore poutine retro DIY in. Schlitz hammock mollit trust fund disrupt quinoa mumblecore live-edge tumblr artisan deserunt sunt. Man braid bicycle rights leggings commodo nisi, flannel skateboard deep v williamsburg aliquip vice franzen humblebrag hot chicken. Mlkshk la croix crucifix chillwave, vaporware letterpress wolf taiyaki meggings elit 8-bit craft beer raw denim chartreuse excepteur.
      </div>
      <div className="city-next-button">^</div>
    </div>
  )
};

export default Info;
