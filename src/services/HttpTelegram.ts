const fetch = require('node-fetch');
const config = require('config');

const headers = {
    'Content-Type' : 'application/json'
}

async function telegramCall(method:any ,options:any, type: string) {
    const extendedHeaders = options.headers ? options.headers : {};
    const request = await fetch(`https://api.telegram.org/bot${config.get('Telegram.token')}/${method}`, {
        method: type,
        body: type === 'get' ?  null : { ...options.body },
        headers: { ...extendedHeaders, ...headers, }
    });

    try {
        if (request.status < 200 || request.status > 300)
            throw request;

        return request.json();
    } catch (e) {
        console.log(e);
    }
}


export default telegramCall;