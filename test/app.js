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
                    var response = eval(code);
                    msg.channel.send('```js\n'+response.toString()+'\n```');
               }catch(e){
                   msg.channel.send('```js\n'+e+'\n```');
               }
            }
        break;
        case 'testar':
            msg.channel.send(`Hm.. Um teste, <@${msg.author.id}>?`);
        break;
        case 'ping':
            msg.reply('pong! :ping_pong:').then(()=>{
                console.log('mensagem enviada!!');
            }).catch(err=>{
                console.log(err);
            });
            
        break;
        case 'info':
            client.users.get(msg.author.id).then(user=>{
                msg.channel.send(`Usuário: \`${user.username}#${user.discriminator}\`\nID: ${user.id}\nAvatar: ${user.avatar}\nhttps://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`);
            });
        break;
    }
});

client.login(process.env.BOT_TOKEN);