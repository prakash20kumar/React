import React, { Component } from 'react';
import Test from './Test';
import './Test.css';

class App extends Component {
  state = { color: 'red' };

  handleClick = () => {
    this.setState({ color: 'green' });
  }

  render() {
    return (
      <div>
        <h1 className="clr">From App Component</h1>
        {this.state.color }
        <br />
        <input type="button" className="btn" value="change" onClick={ this.handleClick } />
        <hr />
        <Test />
      </div>
    );
  }
}

export default App;