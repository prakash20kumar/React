import React, { Component } from 'react';

class App extends Component {

    state = { res: "", opt: "", fn: "" };

    handleNum = (n) => {
        let v = this.state.res;
        if (v === "") {
            this.setState({ res: n });
        }
        else {
            this.setState({ res: v + String(n) });
        }
    }
    handleOpt = (o) => {
        this.setState({ fn: this.state.res, opt: o, res: "" });
    }
    handleEql = () => {
        let a, b, c;
        a = Number(this.state.fn);
        b = Number(this.state.res);
        switch (this.state.opt) {
            case "+": c = a + b;
                break;
            case "-": c = a - b;
                break;
            case "*": c = a * b;
                break;
            case "/": c = a / b;
                break;

        }
        this.setState({ res: c });
    }


    render() {
        console.log(this.state);
        return (
            <>
                <h1>Calculator</h1>
                <input type="text" value={ this.state.res } readOnly /><br />
                <input type="button" value="1" onClick={ () => this.handleNum(1) } />
                <input type="button" value="2" onClick={ () => this.handleNum(2) } />
                <input type="button" value="3" onClick={ () => this.handleNum(3) } />
                <input type="button" value="4" onClick={ () => this.handleNum(4) } /> <br />
                <input type="button" value="5" onClick={ () => this.handleNum(5) } />
                <input type="button" value="6" onClick={ () => this.handleNum(6) } />
                <input type="button" value="7" onClick={ () => this.handleNum(7) } />
                <input type="button" value="8" onClick={ () => this.handleNum(8) } /> <br />
                <input type="button" value="9" onClick={ () => this.handleNum(9) } />
                <input type="button" value="0" onClick={ () => this.handleNum(0) } />

                <input type="button" value="+" onClick={ () => this.handleOpt("+") } />
                <input type="button" value="-" onClick={ () => this.handleOpt("-") } /> <br />
                <input type="button" value="*" onClick={ () => this.handleOpt("*") } />
                <input type="button" value="/" onClick={ () => this.handleOpt("/") } />

                <input type="button" value="=" onClick={ this.handleEql } />
                <input type="button" value="CLR" />
            </>
        );
    }

}
export default App;