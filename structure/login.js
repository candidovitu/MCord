let token;

module.exports = {
    get:()=>{
        return token;
    },
    set:(value)=>{
        token = value
    }
}