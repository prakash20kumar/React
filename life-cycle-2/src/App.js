import React, { Component } from 'react';
import Test from './Test';

class App extends Component {
  state = { vbl: true };

  handleClick = () => {
    this.setState({ vbl: false });
  }

  render() {
    let output = null;
    if (this.state.vbl === true) {
      output = (
        <Test />
      );
    }

    return (
      <>
        <h1>From App Component</h1>
        {output }
        <hr />
        <input type="button" value="Remove Test" onClick={ this.handleClick } />
      </>
    );
  }
}

export default App;