const express =require("express");
const router=express.Router();
const control =require("../Controladores/ContPropiet");
router.use(express.json());



router.post("/asignarPropi", control.agregarPropietario);


module.exports = router;