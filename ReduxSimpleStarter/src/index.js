//go find the library called react and assign it to the variable React
import React from 'react';
import ReactDOM from 'react-dom';

// create a new component, should produce some HTML
const App = () => {
  //the HTML looking stuff is JSX
  //webpack and babel take care of this
  return <div>Hi!</div>;
}

// take the generated HTML and put it on the page
//have to instantiate App before passing it into the DOM
//wrapping it in JSX tags will make it into an instance
ReactDOM.render(<App />, document.querySelector('.container'));
