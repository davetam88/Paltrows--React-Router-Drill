import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// new--30 - app test add import 
import { BrowserRouter } from 'react-router-dom';


// it('renders without crashing', () => {
  // ??? how would the doc look after this create
  // const div = document.createElement('div');
  
  // new--32 - app test.js add bowere wrapper to app to make the test pass
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });


// ReactDOM.render(<App />, div);
// new--33- get this error if use above line 
// FAIL  src / App.test.js.js: 21)
// × renders without crashing(546ms)

// ● renders without crashing
// Invariant Violation: You should not use < Link > outside a < Router >

//   8 | it('renders without crashing', () => {
//     9 |   const div = document.createElement('div');
//     > 10 | ReactDOM.render(<App />, div);
//          |            ^