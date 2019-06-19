import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import Login from './views/Login/index';
import Home from './views/Exam/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/questions" component={Home} />
        <Redirect form="/" to="/questions"></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
