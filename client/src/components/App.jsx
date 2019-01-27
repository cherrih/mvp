import React from 'react';
import Home from './Home/Home.jsx';

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
      isNewYork: false
    }
  }

  render () {
    return (<div>
      <Home cities={this.state.cities} isHome={this.state.isHome}/>
      {/* <NewYorkCity /> */}
    </div>)
  }
}

export default App;