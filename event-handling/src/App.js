import React, { Component } from 'react';

class App extends Component {
  state = { color: 'red' };
  clk = this.handleClick.bind(this);
  // constructor(props){
  //   super(props)
  //   // this.clk = this.handleClick.bind(this);
  // }

  handleClick() {
    console.log("Clicked 3.0");
    // console.log(this);
    this.setState({ color: 'green' });
  }

  render() {
    return (
      <div>
        <h1>From App Component</h1>
        Color is : {this.state.color } <hr />
        <input type="button" value="Click Me" onClick={ this.clk } />
      </div>
    );
  }
}

export default App;