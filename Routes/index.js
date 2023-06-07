const express =require("express");
const router=express.Router();

const RutaPropd=require("./RutaPropied");
//const RutaArren=require("./RutaArrend");
const RutaProp=require("./RutasPropieta");
const RutaPersona=require("./RutaPersona");
const Rutas=[];


Rutas.push(RutaPropd);
//Rutas.push(RutaArren);
Rutas.push(RutaProp);
Rutas.push(RutaPersona);
router.use(Rutas);

module.default =Rutas;
module.exports=router;