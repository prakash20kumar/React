/* eslint-disable default-case */
import React, { Component } from 'react';
class App extends Component {

  state = { fn: '', sn: '', res: '' }

  handleChange = (evt) => {
    //console.log(evt.target.type);
    //console.log(evt.target.name);
    //console.log(evt.target.value);
    let nm = evt.target.name;
    let val = evt.target.value;
    //console.log(nm);
    //console.log(val);
    this.setState({ [nm]: val });

  }

  handleClick = (opt) => {
    let a, b, c;
    a = Number(this.state.fn);
    b = Number(this.state.sn);
    switch (opt) {
      case "+": c = a + b;
        break;
      case "-": c = a - b;
        break;
    }
    this.setState({ res: c });
  }

  render() {
    //console.log(this.state);
    return (
      <div>
        <h1>From App Component</h1>
                First number: <input type="text"
          name="fn"
          onChange={ this.handleChange }
          value={ this.state.fn } /><br />

                Second number: <input type="text"
          name="sn"
          onChange={ this.handleChange }
          value={ this.state.sn } /><br />
                Result : <input type="text" readOnly value={ this.state.res } /> <br />

        <input type="button" value="+" onClick={ () => this.handleClick("+") } />
        <input type="button" value="-" onClick={ () => this.handleClick("-") } />
      </div>
    );
  }
}

export default App;