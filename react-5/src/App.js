import React, { Component } from 'react';
import cla from './App.module.css';
import pic from './sachin.jpg';



class App extends Component {
  render() {
    return (
      <div>
        <h1 className={ cla.clr }>From App Component</h1>
        <input type="button" className="btn btn-primary" value="Change" />
        <hr />
        <hr />
        <img src={ pic } alt="Sachin" width="800" />
      </div>
    );
  }
}

export default App;