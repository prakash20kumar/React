
/*=============================================
=            1,2,3            =
=============================================*/

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

/*=====  End of 1,2,3  ======*/



/*=============================================
=            4            =
=============================================*/

import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
    return (
        <>
            From Hello <br />
        </>
    );
}

class Test extends React.Component {
    render() {
        return (
            <>
                From Test <br />
            </>
        );
    }
}

// const data = (
//     <>
//         <Hello />
//         <Test />
//     </>
// );

// ReactDOM.render(data, document.getElementById("root"));

const App = () => {
    return (
        <>
            <h1>React App</h1>
            <Hello />
            <Test />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

/*=====  End of 4  ======*/

