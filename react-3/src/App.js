import React, { Component } from 'react';

class App extends Component {
  //state = {roll: 5001,name: 'Rajesh'};
  //state= {roll:this.props.rollno, name: this.props.fullname}

  constructor(props) {
    super(props);
    this.state = { roll: this.props.rollno, name: this.props.fullname };
    // this.state = { roll: 5001, name: 'Rajesh' };
  }

  handleClick = () => {
    console.log("Button is Clicked !!");
    this.setState({ roll: 9001, name: 'Rajesh' });
  }

  render() {
    return (
      <div>
        Roll no: {this.state.roll }<br />
        Name is: {this.state.name } <hr />

        <input type='button' value="Change" onClick={ this.handleClick } />
      </div>
    );
  }
}


export default App;