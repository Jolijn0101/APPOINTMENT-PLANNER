import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
//renders the app component
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
