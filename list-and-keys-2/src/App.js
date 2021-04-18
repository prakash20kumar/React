import React, { Component } from 'react';
import Student from './Student';

class App extends Component {

    state={           
            Records:[
                {roll:1001,name:'amit'},
                {roll:1002,name:'sumit'},
                {roll:1003,name:'ramit'},
                {roll:1004,name:'Jatin'},
                {roll:1005,name:'Deepak'},
            ]
        };
    handleClick=()=>{
        console.log("Clicked");
        console.log(this.state.Records.length);
        console.log("---------------------");
    }
    render() {        
        return (
            <div>
                <h1>From App Component 2.0</h1>               

                {this.state.Records.map((record)=>{
                    return (
                        <Student
                        key={record.roll}
                        roll={record.roll}
                        name={record.name}
                        clk={this.handleClick}
                        />  
                    )
                })}

            </div>
        );
    }
}

export default App;