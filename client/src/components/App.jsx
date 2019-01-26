import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h1>Hi</h1>
    </div>)
  }
}

export default App;