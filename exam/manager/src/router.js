import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './views/detail';
import Detail from './views/detail'
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
