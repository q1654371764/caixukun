import dva from 'dva';
import './index.css';
// import "antd/dist/antd.css";
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/user').default);
app.model(require('./models/manager').default);
app.model(require('./models/room').default);
app.model(require('./models/makerUser').default);
app.model(require('./models/global').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
