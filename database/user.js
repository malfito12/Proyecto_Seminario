var mongoose = require("./connect");
var USERSCHEMA = {
    username: String,
    password: String,
    email:String,
    edad:String,
    //sexo:String,
    registerdate:Date,
    rol:String
};
const USER = mongoose.model("user", USERSCHEMA);
module.exports = USER;