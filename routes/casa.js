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

router.get('/casa', (req, res, next)=>{
    CASA.find({}, (err, docs)=>{
        if(err){
            res.status(300).json({
                "msn": "error en la base de datos"
            });
            return;
        }
        res.status(300).json(docs);
    });
});
module.exports = router;
