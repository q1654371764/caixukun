import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import IndexPage from './views/Main/main'
import Login from './views/Login/login';

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
