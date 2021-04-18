import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state={
            FirstName:'Rahul',
            LastName:'Khanna',
            Records:[
                {roll:1001,name:'amit'},
                {roll:1002,name:'sumit'},
                {roll:1003,name:'ramit'},
                {roll:1004,name:'Jatin'}
            ]
        };
    render() {        
        return (
            <div>
                <h1>From App Component</h1>
                First name : {this.state.FirstName} <br />
                Last name : {this.state.LastName} <hr />

                {this.state.Records.map((record)=>{
                    return (
                        <div className="stu" key={record.roll}>
                            <h1>{record.roll}</h1>
                            <p>{record.name}</p>                            
                        </div>    
                    )
                })}

            </div>
        );
    }
}

export default App;