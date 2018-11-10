const Router = require('koa-router');

import telegramCall from  '../services/HttpTelegram';
const routes = new Router();

routes.get('/', async (ctx:any) => {    
    ctx.body = 'Message from napoleon'
})
    .get('/update', async (ctx:any) => {
        const data = await telegramCall('getUpdates', {}, 'get');

        ctx.body = data;
    });

module.exports = routes;