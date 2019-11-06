const request = require('request');
const auth = require('./login');

Object.prototype.reply = function(content) {
    return new Promise((resolve, reject) => {
            if(!content) return process.emitWarning('Message cannot be empty', 'DiscordAPIError');
            var options = {
                uri: `https://discordapp.com/api/channels/${this.channel}/messages`,
                method: 'POST',
                json: {
                    "content": `<@!${this.author.id}>, `+content
                },
                headers: {
                    'Authorization': `Bot ${auth.get()}`,
                    'Content-type': 'application/json'
                }
            };
        
            request(options, (err,res)=>{
                if(err || res.statusCode != 200) return reject(JSON.parse(res.body));
                resolve(JSON.parse(res.body));
            });
    });
}

module.exports = reply;