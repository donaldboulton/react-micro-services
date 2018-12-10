import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

var displayApp = React.createElement(
  'div',
  null,
  React.createElement(App)
);

ReactDOM.render(App, document.getElementById('counter'));