import React from 'react';
import Home from './Home/Home.jsx';
import NewYorkCity from './NewYorkCity/NewYorkCity.jsx';

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
      isHome: false,
      isNewYorkCity: true
    }
  }

  render () {
    console.log('in the app')
    return (
    <div>
      <div>{ this.state.isHome ? <Home cities={this.state.cities}/> : <div></div> }</div>
      <div>{ this.state.isNewYorkCity ? <NewYorkCity /> : <div></div>}</div>
    </div>)
  }
}

export default App;