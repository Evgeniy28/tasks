import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Imports react components
import App from './App.jsx';
import LoginPage from './components/LoginPage.jsx';

window.handleGoogleApiLoaded = () => {
  console.log('API loaded!');
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/login' component={LoginPage} />
    </Route>
  </Router>,
  document.getElementById('mount-point')
);
