import React, { Component } from 'react';
import Test from './Test';

class App extends Component {
  render() {
    const age = 13;
    return (
      <div>
        <h4>From App Component</h4>
        {age >= 18 ? <Test /> : "No.... Cannot give vote !!" }
      </div>
    );
  }
}

export default App;