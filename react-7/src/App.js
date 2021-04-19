import React, { Component } from 'react';
class App extends Component {

  state = { fn: '', sn: '', res: '' }
  handleChangeFirst = (evt) => {
    this.setState({ fn: evt.target.value });
  }
  handleChangeSecond = (evt) => {
    this.setState({ sn: evt.target.value });
  }
  handleAdd = () => {
    let a, b, c;
    a = Number(this.state.fn);
    b = Number(this.state.sn);
    c = a + b;
    this.setState({ res: c });
  }
  handleSub = () => {
    let a, b, c;
    a = Number(this.state.fn);
    b = Number(this.state.sn);
    c = a - b;
    this.setState({ res: c });
  }
  render() {
    return (
      <div>
        <h1>From App Component</h1>
                First number: <input type="text"
          onChange={ this.handleChangeFirst }
          value={ this.state.fn } /><br />

                Second number: <input type="text"
          onChange={ this.handleChangeSecond }
          value={ this.state.sn } /><br />
                Result : <input type="text" readOnly value={ this.state.res } /> <br />

        <input type="button" value="+" onClick={ this.handleAdd } />
        <input type="button" value="-" onClick={ this.handleSub } />
      </div>
    );
  }
}

export default App;