import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Home from './Home';
import MainLayout from './MainLayout';
import SignUp from './SignUp';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="sign-up" component={SignUp} />
    </Route>
  </Router>,
  document.getElementById('root')
);
