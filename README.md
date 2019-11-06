## MCord
Biblioteca JavaScript para interação com a Discord API!

_Discordo.js agora é MCord!_

```js
const client = require('mcord');

client.events.on('ready', ()=>{
 console.log('Iniciado com sucesso! ;-)');
});

client.events.on('message', msg=>{
  if(msg.content === '!ping'){
    msg.channel.send(':ping_pong: Pong');
  }
});

client.login('TOKEN DO SEU BOT :D');
```


## Atualizações

| Versão        | Descrição           | Status  |
| ------------- |:-------------:| -----:|
| 1.0.0     | Projeto iniciado, eventos "ready" e "message" adicionados. | :heavy_check_mark: |
| 1.0.1     | Npm update      |  :heavy_check_mark:	 |
| 1.0.2     | Npm update      |  :heavy_check_mark:	 |
| 1.0.3     | Npm update      |  :heavy_check_mark:	 |
| 1.2.0     | Eventos "messageEdit", "messageUpdate", "messageDelete", "presenceUpdate" e "guildCreate" adicionados. Callback nos métodos "send" e "reply" adicionado. Função para editar mensagem criada. Diretório contendo [exemplos](https://github.com/candidovitu/Discordo.js/tree/master/examples) criado.      |  :heavy_check_mark:	 |
| 1.2.0     | Método "users" criado. Promises! [exemplos](https://github.com/candidovitu/Discordo.js/tree/master/examples)      |  🛠	 |
--------------
MCord está disponível no npm!
> https://www.npmjs.com/package/MCord
--------------

#####Entre no servidor do MCord!

_Para suporte, sugestão, auxiliação e novidades, participe do servidor!_

[![Discord](https://i.imgur.com/muOb1h0.png)](https://discord.gg/2YqdwzT)
<p align="center">
<a style="background:#53B581;color:#FFF;font-weight:900;padding:10px;border-radius:2px;" href="https://discord.gg/2YqdwzT">Participar!</a>
</p>
