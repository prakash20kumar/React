import React, { Component } from 'react';

class Clock extends Component {
    state = { dt: new Date() }
    render() {
        return (
            <>
                <h1>Clock</h1>
                {this.state.dt.toLocaleTimeString() }
            </>
        );
    }
    componentDidMount() {
        this.id = setInterval(() => {
            this.setState({ dt: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }
}

export default Clock;