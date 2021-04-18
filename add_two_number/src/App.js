import React, { Component } from 'react';

class App extends Component {
  state = { fn: '', sn: '', res: '' };

  handleFirst = (evt) => {
    // console.log("first :", evt.target.value);
    this.setState({ fn: evt.target.value });
  }

  handleSecond = (evt) => {
    // console.log("Second : ", evt.target.value);
    this.setState({ sn: evt.target.value });
  }

  handleClick = () => {
    let a, b, c;
    a = Number(this.state.fn);
    b = Number(this.state.sn);
    c = a + b;
    this.setState({ res: c });
  }

  render() {
    return (
      <div>
        <h1>From App Component</h1>
        First Number : <input type="text" value={ this.state.fn } onChange={ this.handleFirst } />
        <br />
        Second Number : <input type="text" value={ this.state.sn } onChange={ this.handleSecond } />
        <br />
        Result : <input type="text" value={ this.state.res } readOnly />
        <hr />
        <input type="button" value="add" onClick={ this.handleClick } />
      </div>
    );
  }
}

export default App;
