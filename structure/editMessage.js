const request = require('request');
const auth = require('./login');

Object.prototype.edit = function(content, cb){
    if(!content) return process.emitWarning('Message cannot be empty', 'DiscordAPIError');
    var options = {
        uri: `https://discordapp.com/api/channels/${this.channel_id}/messages/${this.id}`,
        method: 'PATCH',
        json: {
            "content": content
        },
        headers: {
            'Authorization': `Bot ${auth.get()}`,
            'Content-type': 'application/json'
        }
    };

    request(options, (err,res)=>{
        if(err || res.statusCode != 200) return process.emitWarning('Failed to complete request', res.statusMessage);
        if(typeof cb === 'function') return cb(res.body);
    });
}

module.exports = edit;