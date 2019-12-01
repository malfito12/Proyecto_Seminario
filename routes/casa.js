var express = require("express");
var CASA = require("../database/casa");
var router = express.Router();


router.post("/casa", (req, res, next)=>{
    var params = req.body;
    params["fecha_publicacion"]= new Date();
    var casa = new CASA(params);
    casa.save().then(()=>{
        res.status(300).json(params);
    });
});
module.exports = router;
