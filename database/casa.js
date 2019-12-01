const mongoose = require('./connect');
var USERCASA = {

    //codigo:String,
    //id_vendedor:Nomber,
    //codigo_inmoviliaria: Number,
    //status:String,
    //tipo_terreno:String,
    //oferta:String,+
    //estado:String,+
    //id_ciudad:Number,
    //id_tipo_inmueble:Number,
    //id_tipo_oferta:Number,
    //region:String,+
    //ubicacion:String,+
    zona:String,
    //id_zona:Number,
    direccion:String,
    //moneda:String,
    precio:Number,
    descripsion:String,
    //face_entrega:String,+
    //supterreno:String,
    servicios:String,
    amurallado:String,
    //des_abitacion:String,
    //desBano:String,
    //num_Dormitorios:Number,
    dormitorios:Number,
    baños:Number,
    piso:Number,
    elevador:String,
    picina:String,
    parqueo:String,
    amoblado:String,
    fecha_publicacion:Date,
    //latitud:
    //longitud:
};
const CASA = mongoose.model("casa", USERCASA);
module.exports = CASA;