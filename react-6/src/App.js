import React, { Component } from 'react';

class App extends Component {
  state = {
    color: 'red',
    num: 0,
  }

  handleClick = (no, evt) => {
    this.setState({ color: evt.target.value, num: no });
    console.log(no);
    console.log(evt.target.type);
    console.log(evt.target.name);
    console.log(evt.target.value);
  }
  render() {
    return (
      <div>
        <h1>From App Component</h1>
        Color : {this.state.color } - {this.state.num } <hr />
        <input type="button" name="grn" value="green" onClick={ this.handleClick.bind(this, 1000) } />
        <input type="button" name="blu" value="blue" onClick={ (evt) => this.handleClick(5000, evt) } />
      </div>
    );
  }
}

export default App;