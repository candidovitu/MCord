const WebSocket = require('ws');
const sendMessage = require('./structure/sendMessage');
const Events = require('events');
const auth = require('./structure/login');
const events = new Events();
let ready = false;

    const GATEWAY_URL = "wss://gateway.discord.gg/?v=6&encoding=json";
    let ws = null;
    
    connect();
    function connect(){
        ws = new WebSocket(GATEWAY_URL);
        ws.onerror = errorHandler;
        ws.onmessage = messageHandler;
        ws.onclose = connect;
    }

    function errorHandler(err){
        console.log(err)
    }
    
    function messageHandler(message){
        let json = message.data;
        json = JSON.parse(json);

        if(json.op == 10){
            doLogin();
        }else if(json.op == 0){
            switch(json.t){
                case 'MESSAGE_CREATE':
                    events.emit('message', json.d);
                break;
                case 'READY':
                    if(ready) return;
                    events.emit('ready', json.d);
                    ready = true;
                break;
            }
        }
    }
    
    function doLogin(){

        if(!auth.get()) throw 'Missing BOT Token';
        let msg = {
            "token": auth.get(),
            "properties": {
                "$os": "browser",
                "$browser": "chrome",
                "$device": "cloud9"
            },
            "compress": false
        };
        let payload = {"op": 2, "d": msg};
        ws.send(JSON.stringify(payload));
    }

    module.exports = {
        events,
        login:(token)=>{
            auth.set(token);
        }
    }