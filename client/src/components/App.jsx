import React from 'react';
import Details from './Details/Details.jsx';
import About from './About/About.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cities: [
        {
          name:'Tokyo',
        },
        {
          name:'NYC',
        },
        {
          name:'Quito',
        },
        {
          name:'Wellington',
        },
        {
          name:'San Francisco',
        },
        {
          name:'Rio',
        },
        {
          name:'Auckland',
        },
        {
          name:'San Francisco',
        },
        {
          name:'Rio',
        },
        {
          name:'Auckland',
        },
      ],
      isHome: true,
    }
  }

  render () {
    return (<div>
      {/* <Home cities={this.state.cities} isHome={this.state.isHome}/> */}
      <nav><h1>QUEER TRIP</h1></nav>
      <div className="main-container">
        <Details cities={this.state.cities}/>
        <About />
      </div>
    </div>)
  }
}

export default App;