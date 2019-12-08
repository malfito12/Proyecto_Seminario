var express = require("express");
var USER = require("../database/user");
var router = express.Router();
var cryto = require("crypto");

router.post("/user", (req, res, next)=>{
    var params = req.body;
    params["registerdate"]= new Date();
    
    if (params.password == null){
        res.status(300).json({
            "msn": "no tiene password"
        });
        return;
    }
    params.password = cryto.createHash("md5").update(params.password).digest("hex");
    var user = new USER(params);
    user.save().then(()=>{
        res.status(200).json(params);
    });
});

router.get('/user', (req, res, next)=>{
    USER.find({}, (err, docs)=>{
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