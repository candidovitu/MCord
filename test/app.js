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
                    msg.channel.send(eval(code) || 'Sem resultado');
               }catch(e){
                   msg.channel.send('```js\n'+e+'\n```');
               }
            }
        break;
        case 'testar':
            msg.channel.send(`Hm.. Um teste, <@${msg.author.id}>?`);
        break;
        case 'ping':
            console.log(msg.author.id)
            msg.reply('pong :ping_pong:', m=>{
                setTimeout(()=>{
                    m.edit('Lorem');
                },5000);
            });
        break;
    }
});

client.login(process.env.BOT_TOKEN);