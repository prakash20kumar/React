import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    fn: '',
    sn: '',
    res: '',
  };

  handleFirst = (evt) => {
    this.setState({ fn: evt.target.value });
  }

  handleSecond = (evt) => {
    this.setState({ sn: evt.target.value });
  }

  handleClick = (evt) => {
    let a, b, c;
    a = Number(this.state.fn)
    b = Number(this.state.sn)
    if (evt.target.value === '+') {
      c = a + b;
      this.setState({ res: c });
    } else if (evt.target.value === '-') {
      c = a - b;
      this.setState({ res: c });
    }
    else if (evt.target.value === '*') {
      c = a * b;
      this.setState({ res: c });
    }
    else if (evt.target.value === '/') {
      c = a / b;
      this.setState({ res: c });
    }

  }
  render() {
    return (
      <div>
        <h1>Calculate</h1>
        <label for='fn'>First Number: </label>
        <input type="text" value={ this.state.fn } onChange={ this.handleFirst } id="fn" />
        <br />
        <label for="sn">Second Number: </label><input type="text" value={ this.state.sn } onChange={ this.handleSecond } id="sn" />
        <br />
        <label>Result: </label><input type="text" value={ this.state.res } readOnly /> <hr />
        <input type="button" className="btn" value="+" onClick={ this.handleClick } />
        <input type="button" className="btn" value="-" onClick={ this.handleClick } />
        <input type="button" className="btn" value="*" onClick={ this.handleClick } />
        <input type="button" className="btn" value="/" onClick={ this.handleClick } />
      </div>
    );
  }
}

export default App;