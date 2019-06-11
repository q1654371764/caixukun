import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Detail from './views/detail/detail';
import Login from './views/Login/login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
