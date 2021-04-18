import React, { Component } from 'react';
class App extends Component {

    state = { gender: "male" }

    handleChange = (evt) => {
        this.setState({ gender: evt.target.value });
    }
    handleSubmit = (evt) => {
        alert("Gender is : \n" + this.state.gender);
        evt.preventDefault();
    }
    render() {
        return (
            <>
                <h1>From App component</h1>
                <form onSubmit={ this.handleSubmit }>
                    Gender :
                    <input type="radio" checked={ this.state.gender === "male" } value="male" onChange={ this.handleChange } /> Male
                    <input type="radio" checked={ this.state.gender === "female" } value="female" onChange={ this.handleChange } /> Female
                    <br />
                    <input type="submit" value="submit data" />
                </form>
            </>
        );
    }
}
export default App;