var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter')

var name = 'Hamit Burak';
var message = 'Hey what\'s up';
ReactDOM.render(
  <Greeter name={name} message={message}/>,
  document.getElementById('app')
);