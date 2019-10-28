const client = require('discordo.js');

client.events.on('ready', ()=>{
 console.log('Iniciado com sucesso! ;-)');
});

client.events.on('message', msg=>{
  if(msg.content === '!ping'){
    msg.channel.send(':ping_pong: Pong');
  }
});

client.login('TOKEN DO SEU BOT :D');