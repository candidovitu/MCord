# Discordo.js
Biblioteca para estudo, utilizando a API do Discord;
> Inspirado no discord.js

```js
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
```

## Atualizações

| Versão        | Descrição           | Status  |
| ------------- |:-------------:| -----:|
| 1.0.0     | Projeto iniciado, eventos "ready" e "message" adicionados. | :heavy_check_mark: |
| 1.0.1     | Npm update      |  :heavy_check_mark:	 |
| 1.0.2     | Npm update      |  :heavy_check_mark:	 |
| 1.0.3     | Npm update      |  :heavy_check_mark:	 |
| 1.2.0     | Eventos "messageEdit", "messageUpdate", "messageDelete", "presenceUpdate" e "guildCreate" adicionados. Callback nos métodos "send" e "reply" adicionado. Função para editar mensagem criada. Diretório contendo [exemplos](https://github.com/candidovitu/Discordo.js/tree/master/examples) criado.      |  :heavy_check_mark:	 |
Discordo.js está disponível no npm!
> https://www.npmjs.com/package/discordo.js
