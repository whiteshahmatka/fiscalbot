const Koa = require('koa');
const api = require('./api');
const config = require('config');

require('./config/mongodb');

const app = new Koa();
app.use(api.routes());

app.listen(config.get('App.port'));