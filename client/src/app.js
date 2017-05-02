import React from 'react';
import ReactDOM from 'react-dom';
import MovieContainer from './containers/MovieContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <MovieContainer />,
    document.getElementById('app')
  );
};
