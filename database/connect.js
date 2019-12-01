const mongoose = require("mongoose");
const databamane= "seminario";
mongoose.connect("mongodb://172.22.0.2:27017/" + databamane);
module.exports = mongoose;