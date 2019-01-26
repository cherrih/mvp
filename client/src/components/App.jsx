import React from 'react';
import Details from './Details.jsx';
import About from './About.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (<div>
      <nav><h1>QUEER TRIP</h1></nav>
      <div className="main-container">
        <Details />
        <About />
      </div>
    </div>)
  }
}

export default App;