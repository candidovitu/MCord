const client = require('discordo.js');

client.events.on('ready', ()=>{
 console.log('Iniciado com sucesso! ;-)');
});

client.events.on('message', msg=>{
  if(msg.content === '!ping'){
    msg.channel.send(':ping_pong: Pong', m=>{ // Callback
        setTimeout(()=>{ // Timeout para editar a mensagem após 5 segundos do envio
            m.edit('Olá, mundo!'); // Mensagem editada ;-)
        }, 5000); // 5 segundos em milisegundos
    });
  }
});

client.login('TOKEN DO SEU BOT :D');