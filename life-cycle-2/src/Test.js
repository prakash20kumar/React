import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Rahul' };
        console.log("From Constructor");
    }

    handleClick = () => {
        console.log("Clicked");
        this.setState({ name: 'Rahul Kumar' });
    }
    render() {
        console.log("From Render");

        return (
            <>
                <h2>From Test</h2>
                Name is: {this.state.name }
                <hr />
                <input type="button" value="Change" onClick={ this.handleClick } />
            </>
        );
    }

    componentDidMount() {
        console.log("From componentDidMount");
    }

    componentDidUpdate() {
        console.log("From componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("From componentWillUnmount");
    }
}

export default Test;