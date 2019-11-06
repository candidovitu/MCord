const client = require('discordo.js');

client.events.on('ready', ()=>{ // Evento ready, será disparado ao iniciar seu bot, caso esteja tudo certo. ;-)
 console.log('Iniciado com sucesso! ;-)'); 
});

client.events.on('message', msg=>{
  if(msg.content === '!ping'){ // Checa se o conteúdo da mensagem é o comando
    msg.channel.send(':ping_pong: Pong'); // caso seja, irá enviar no canal: :ping_pong: Pong!
  }
});

client.login('TOKEN DO SEU BOT :D'); // Aqui você coloca a token de seu bot, que pode ser criado em: http://discordapp.com/developers