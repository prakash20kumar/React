import React, { Component } from 'react';
import classes from './Test.module.css';

class Test extends Component {
    render() {
        return (
            <div>
                <h2 className={ classes.clr }>Test</h2>
                <input className={ classes.btn } type="button" value="Click Here" />
            </div>
        );
    }
}

export default Test;