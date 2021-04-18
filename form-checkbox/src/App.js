import React, { Component } from 'react';

class App extends Component {

    state = { sure: false, num: "" }

    handleSubmit = (evt) => {
        if (this.state.sure === true) {
            alert("Number is : " + this.state.num);
        }
        else {
            alert("You have be sure first");
        }
        evt.preventDefault();
    }

    handleChange = (evt) => {
        //console.log(evt.target.type);
        //console.log(evt.target.name);
        //console.log(evt.target.value);
        //console.log(evt.target.checked);
        //console.log("------------------------------")
        const type = evt.target.type;
        const name = evt.target.name;


        let v = type === "checkbox" ? evt.target.checked : evt.target.value;
        this.setState({ [name]: v });
    }
    render() {
        return (
            <>
                <h1>From App component</h1>
                <form onSubmit={ this.handleSubmit }>
                    Are you sure ?
                    <input name="sure" checked={ this.state.sure }
                        onChange={ this.handleChange }
                        type="checkbox" /> <br />

                    Enter any number :
                    <input name="num" value={ this.state.num }
                        onChange={ this.handleChange }
                        type="number" /> <br />
                    <input type="submit" value="submit data" />
                </form>
            </>
        );
    }

}
export default App;