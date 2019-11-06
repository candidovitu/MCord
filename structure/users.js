const request = require('request');
const auth = require('./login');
   
module.exports = {
    get(id){
    return new Promise((resolve,reject)=>{
     if(!id) return process.emitWarning('You must provide an ID', 'DiscordAPIError');
     var options = {
         uri: `https://discordapp.com/api/users/${id}`,
         method: 'GET',
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
}