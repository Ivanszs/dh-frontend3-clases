import React from 'react';
import ReactDOM from 'react-dom';

const container =
  React.createElement('div', null,
    React.createElement('h1', null, 'Con lo visto hasta ahora'),
    React.createElement('h2', null, 'Replica este HTML'),
    React.createElement('h3', null, 'Usando'),
    React.createElement('h4', null, 'React.js',),
    React.createElement('footer', null, 'Suerte!')
  );

ReactDOM.render(
  container,
  document.getElementById('root')
);