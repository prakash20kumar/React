import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { vbl: false };

  handleClick = () => {
    // this.setState({vbl:true});
    let v = this.state.vbl;
    v = !v;
    this.setState({ vbl: v });
  }

  render() {
    let output = null;
    if (this.state.vbl === true) {
      output = (
        <div className="stu">
          <h1>Amit</h1>
          <p>22</p>
        </div>
      );
    }

    return (
      <>
        <input type="button" className="btn" value="Show/Hide" onClick={ this.handleClick } />
        {output }
      </>
    );
  }
}

export default App;
