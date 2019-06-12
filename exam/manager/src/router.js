import React from 'react';
import {Router, Route, Switch } from 'dva/router';
import IndexPage from '@/views/detail/detail';
import Login from '@/views/Login/login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={IndexPage} />
    </Switch>
  </Router>
  );
}

export default RouterConfig;
