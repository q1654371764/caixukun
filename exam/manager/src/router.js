import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Detail from './views/detail'
import IndexPage from './views/login';

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
