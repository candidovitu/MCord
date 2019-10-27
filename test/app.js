const client = require('../index');
require('dotenv/config');
const prefix = "$";

client.events.on('ready', data=>{
    console.log('[BOT]', 'Iniciado com sucesso! ;-)')
});

client.events.on('message', msg=>{
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    switch(command){
        case 'eval':
            if(msg.author.id === '535940900157784064'){
                const code = args.join(' ');
                try{
                    msg.channel_id.send(eval(code) || 'Sem resultado');
               }catch(e){
                   msg.channel_id.send('```js\n'+e+'\n```');
               }
            }
        break;
        case 'testar':
            msg.channel_id.send(`Hm.. Um teste, <@${msg.author.id}>?`);
        break;
    }
});

client.login(process.env.BOT_TOKEN);