import React, { Component } from 'react';
import Test from './Test';

class App extends Component {
  render() {
    const roll = 5001;
    return (
      <div>
        <h4>From App Component</h4>
        {roll > 500 && <Test /> }
      </div>
    );
  }
}

export default App;
