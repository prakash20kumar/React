import React, { Component } from 'react';

class App extends Component {
    state = { name: "" }
    handleChange = (evt) => {
        this.setState({ name: evt.target.value });
    }
    handleSubmit = (evt) => {
        alert("Name is : " + this.state.name);
        evt.preventDefault();
    }
    render() {
        return (
            <>
                <h1>From App</h1>
                <form onSubmit={ this.handleSubmit } >
                    Name : <input type="text" value={ this.state.name } onChange={ this.handleChange } />
                    <input type="submit" value="Submit Data" />
                </form>
            </>
        );
    }
}

export default App;