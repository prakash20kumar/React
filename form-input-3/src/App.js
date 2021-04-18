import React, { Component } from 'react';
class App extends Component {

    state = { fname: "", lname: "" }

    handleChange = (evt) => {
        //console.log(evt.target.type);
        //console.log(evt.target.name);
        //console.log(evt.target.value);
        //console.log("-----------------");
        let nm = evt.target.name;
        let v = evt.target.value;
        this.setState({ [nm]: v });
    }
    handleSubmit = (evt) => {
        alert("Name is : " + this.state.fname + " " + this.state.lname);
        evt.preventDefault();
    }
    render() {
        //console.log(this.state)       
        return (
            <>
                <h1>From App component</h1>
                <form onSubmit={ this.handleSubmit }>
                    First name :
                    <input type="text" name="fname" value={ this.state.fname } onChange={ this.handleChange } /><br />
                    Last name :
                    <input type="text" name="lname" value={ this.state.lname } onChange={ this.handleChange } /> <br />

                    <input type="submit" value="submit data" />
                </form>
            </>
        );
    }
}
export default App;