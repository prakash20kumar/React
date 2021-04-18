import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const r = 12000;
const nm = "Prakash Kumar"
ReactDOM.render(<App rollno={ r } fullname={ nm } />,
  document.getElementById('root')
);