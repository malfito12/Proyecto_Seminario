var express = require("express");
var USER = require("../database/user");
var router = express.Router();
var cryto = require("crypto");
var jwt = require("jsonwebtoken");
const keycypher ="password123456";

function verytoken(req, res, next){
    //recibir token
    const header = req.headers["authorization"];
    if(header == null){
        res.status(300).json({
            "msn": "no tienes permiso"
        });
        return;
    }
    req.token= header;
    jwt.verify(req.token, keycypher, (err, authData)=>{
        if(err){
            res.status(403).json({
                "msn": "token incorrecto"
            });
            return;
        }
        res.status(300).json(authData);
    });
}

router.post("/user", (req, res, next)=>{
    var params = req.body;
    params["registerdate"]= new Date();
    if (params.password == null){
        res.status(300).json({
            "msn": "no tiene password"
        });
        return;
    }
    params["password"] = cryto.createHash("md5").update(params.password).digest("hex");
    var user = new USER(params);
    user.save().then(()=>{
        res.status(200).json(params);
    });
});

router.post("/login", (req, res, next)=>{
    var params = req.body;
    var passwordcipher = cryto.createHash("md5").update(params.password).digest("hex");
    USER.find({email:params.email, password: passwordcipher}).exec((err, docs)=>{
        if (err){
            res.status(300).json({
                "msn": "Problemas con la base de datos"
            });
            return;
        }
        if (docs.length == 0){
            res.status(300).json({
                "msn": "usuario y password incorreto"
            });
            return;
        }else{
            //token
            jwt.sign({name: params.email, password: passwordcipher}, keycypher,(err, token)=>{
                if(err){
                    res.status(300).json({
                        "msn": "Error de jsonwebtoken"
                    });
                    return;
                }
                res.status(300).json({
                    "token": token
                });
                return;
            });
        }
    });
});

router.get('/user', verytoken , (req, res, next)=>{
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