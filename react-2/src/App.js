

/*=============================================
=            2            =
=============================================*/

// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Rahul</h1>
//                 <p>22</p>
//             </div>
//         )
//     }
// }

// export default App;

/*=====  End of 2  ======*/






/*=============================================
=            2            =
=============================================*/

// import React, { Component } from 'react';
// import Student from './Student';

// class App extends Component {
//     render() {
//         const r = 5001;
//         const nm = 'Rahul Gupta';
//         return (
//             <div>
//                 <h1>React App 2.0</h1>
//                 <Student roll={ r } name={ nm }>Testing is going on</Student>
//             </div>
//         );
//     }
// }

// export default App;

/*=====  End of 2  ======*/


/*=============================================
=            3            =
=============================================*/

import React, { Component } from 'react';
import Student from './Student';

class App extends Component {
    render() {
        const record = { roll: 9001, name: 'Rahul Kumar', job: 'programmer' }
        return (
            <>
                <h1>React App 2.0</h1>
                <Student data={ record } />
            </>
        )
    }
}

export default App;

/*=====  End of 3  ======*/



