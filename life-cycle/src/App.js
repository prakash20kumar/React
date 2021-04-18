import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    console.log("Component Did Mount");
  }

  constructor(props) {
    super(props);
    console.log("From Constructor 3.0");
  }
  render() {
    console.log("From Render");
    return (
      <div>
        <h1>From App Component</h1>
      </div>
    );
  }
}

export default App;