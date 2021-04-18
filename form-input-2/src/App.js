import React, { Component } from 'react';

class App extends Component {
    state = { address: "" }
    handleChange = (evt) => {
        this.setState({ address: evt.target.value });
    }
    handleSubmit = (evt) => {
        alert("Address is : " + this.state.address);
        evt.preventDefault();
    }
    render() {
        return (
            <>
                <h1>From App</h1>
                <form onSubmit={ this.handleSubmit }>
                    Address: <textarea value={ this.state.address } rows="10" cols="22" onChange={ this.handleChange } />
                    <input type="submit" value="Submit Date" />
                </form>
            </>
        );
    }
}

export default App;