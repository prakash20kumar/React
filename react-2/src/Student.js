
/*=============================================
=            2            =
=============================================*/

// import React, { Component } from 'react';

// class Student extends Component {
//     render() {
//         return (
//             <>
//                 Roll: {this.props.name }<br />
//                 Name: {this.props.roll }<br />
//                 ob: {this.props.children }<hr />
//             </>
//         )
//     }
// }


// export default Student;


/*=====  End of 2  ======*/


/*=============================================
=            3            =
=============================================*/

function Student(props) {
    return (
        <>
            Roll : {props.data.roll } <br />
            Name : {props.data.name } <br />
            Job : {props.data.job } <hr />
        </>
    )
}

export default Student;

/*=====  End of 3  ======*/

