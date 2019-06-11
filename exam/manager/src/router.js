import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Detail from './views/Main/leftBar/detail'
import IndexPage from './views/Login/login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/detail" exact component={Detail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
