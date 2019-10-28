const WebSocket = require('ws');
const Events = require('events');
const auth = require('./structure/login');
const events = new Events();
let ready = false;

const structure = {
    sendMessage: require('./structure/sendMessage'),
    replyMessage: require('./structure/replyMessage'),
    editMessage: require('./structure/editMessage')
}

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
                    const msgObject = {
                        type: json.d.type,
                        tts: json.d.tts,
                        timestamp: json.d.timestamp,
                        pinned: json.d.pinned,
                        nonce: json.d.nonce,
                        mentions: json.d.mentions,
                        everyone: json.d.mentions_everyone,
                        member: json.d.member,
                        id: json.d.id,
                        embed: json.d.embeds,
                        edited_timestamp: json.d.edited_timestamp,
                        content: json.d.content,
                        channel: json.d.channel_id,
                        author: json.d.author,
                        attachments: json.d.attachments,
                        guild_id: json.d.guild_id
                    }
                    events.emit('message', msgObject);
                break;
                case 'READY':
                    if(ready) return;
                    events.emit('ready', json.d);
                    ready = true;
                break;
                case 'MESSAGE_UPDATE':
                    events.emit('messageUpdate', json.d)
                break;
                case 'MESSAGE_DELETE':
                    events.emit('messageDelete', json.d)
                break;
                case 'PRESENCE_UPDATE':
                    events.emit('presenceUpdate', json.d)
                break;
                case 'GUILD_CREATE':
                    events.emit('guildCreate', json.d)
                break;
            }
        }
    }
    
    function doLogin(){

        if(!auth.get()) throw 'Missing BOT Token';
        let msg = {
            "token": auth.get(),
            "properties": {
                '$os': process.platform,
                '$browser': 'chrome',
                '$device': 'discordo',
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