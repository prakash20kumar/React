import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  state = { vbl: true };

  handleClick = () => {
    this.setState({ vbl: false });
  }

  render() {
    let output = null;
    if (this.state.vbl === true) {
      output = (
        <Clock />
      );
    }

    return (
      <>
        <h1>From App Component</h1>
        {output }
        <hr />
        <input type="button" value="Remove Clock" onClick={ this.handleClick } />
      </>
    );
  }
}

export default App;