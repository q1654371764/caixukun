import React from 'react';
import { Router, Route, Switch} from 'dva/router';
import LoginPage from './views/Login/Login.js';
import MapStateToProps from "./views/Exam/index"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={MapStateToProps} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;