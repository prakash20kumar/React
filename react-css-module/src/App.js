import React, { Component } from 'react';
import Test from './Test';
import cla from './App.module.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className={ cla.clr }>From App Component</h1>
        <input type="button" className={ cla.btn } value="Change" />
        <hr />
        <Test />
      </div>
    );
  }
}

export default App;