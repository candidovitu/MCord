const request = require('request');
const auth = require('./login');

Object.prototype.send = function(content, embed){
    if(!content && !embed) return process.emitWarning('Message cannot be empty', 'DiscordAPIError')
    var options = {
        uri: `https://discordapp.com/api/channels/${this}/messages`,
        method: 'POST',
        json: {
            "content": content || null,
            "tts": false,
            "embed": embed || null
          },
        headers: {
            'Authorization': `Bot ${auth.get()}`,
            'Content-type': 'application/json'
        }
    };

    request(options, (err,res)=>{
        if(err || res.statusCode != 200) throw res.statusMessage;
    });
}

module.exports = send;