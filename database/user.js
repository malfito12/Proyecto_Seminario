var mongoose = require("./connect");
var USERSCHEMA = {
    usermane: String,
    password: String,
    email:String,
    sexo:String,
    registerdate:Date
};
const USER = mongoose.model("user", USERSCHEMA);
module.exports = USER;