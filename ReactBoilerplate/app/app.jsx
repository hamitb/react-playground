var React = require('react');
var ReactDOM = require('react-dom');


var objOne = {
  name: 'Hamit Burak',
  location: 'Turkey',
};

var objTwo = {
  age: 21,
  ...objOne,
}

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app</h1>,
  document.getElementById('app')
);