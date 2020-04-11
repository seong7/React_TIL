import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App_fn from './App_fn';
import App_cl from './App_cl';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App_fn />
    {/* <App_cl /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
