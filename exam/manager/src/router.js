import React from 'react';
import { Router, Route, Switch} from 'dva/router';
import IndexDetail from './views/Main/index'
import Login from './views/Login/login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={IndexDetail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
