import React from 'react';
import { Router, Route, Switch} from 'dva/router';
import IndexDetail from './views/Main/index'
import Login from './views/Login/login';
import {connect} from 'dva';
import AccessForbiddenPage from './views/Main/Other/403';
import NotFoundPage from './views/Main/Other/404';

// 引入国际化
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zhCN from './lang/zh-CN.js';
import enUS from './lang/en-US.js';
const localMap = {
  en: enUS,
  zh: zhCN
}


addLocaleData([...en, ...zh]);

const mapStateToProps = state=>{
  return {
    locale: state.global.locale
  }
}
const RouterView = connect(mapStateToProps)(({locale,history})=>{  
  console.log(locale)
  return <IntlProvider locale={locale} messages={localMap[locale]}>
    <Router history={history}>
     <Switch>
        <Route path="/login" component={Login} />
        <Route path="/403" component={AccessForbiddenPage} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="/" component={IndexDetail} />
      </Switch>
    </Router>
  </IntlProvider>
})
function RouterConfig({ history }) {
  return (
    <RouterView history={history}/>
  );
}

export default RouterConfig;
