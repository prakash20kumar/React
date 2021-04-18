import React, { Component } from 'react';

class App extends Component {
  state = { color: 'red' };

  handleClick = (evt) => {
    console.log(evt.target.type);
    console.log(evt.target.name);
    console.log(evt.target.value);
    console.log("--------------------");

    this.setState({ color: evt.target.value });
    // if (evt.target.value === 'green') {
    //   this.setState({ color: 'green' });
    // } //else if (evt.target.value === 'blue') {
    //   this.setState({ color: 'blue' });
    // }
  }
  render() {
    return (
      <div>
        <h1>From App Component</h1>
        Color is : {this.state.color } <hr />
        <input type="button" name="grn" value="green" onClick={ this.handleClick } />
        <input type="button" name="blu" value="blue" onClick={ this.handleClick } />
      </div>
    );
  }
}

export default App;