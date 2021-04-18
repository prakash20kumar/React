import React, { Component } from 'react';

class App extends Component {
    state = { cnt: "in" }
    handleChange = (evt) => {
        this.setState({ cnt: evt.target.value });
    }

    handleSubmit = (evt) => {
        alert("Country is : " + this.state.cnt);
        evt.preventDefault();
    }
    render() {
        return (
            <>
                <h1>From App</h1>
                <form onSubmit={ this.handleSubmit }>
                    Country:
                <select value={ this.state.cnt } onChange={ this.handleChange }>
                        <option value="us">United States</option>
                        <option value="in">India</option>
                        <option value="afg">Afghanistan</option>
                        <option value="aus">Australia</option>
                        <option value="jpn">Japan</option>
                    </select>
                    <input type="submit" value="Submit Data" />
                </form>
            </>
        );
    }
}

export default App;