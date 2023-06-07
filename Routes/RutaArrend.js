const express =require("express");
const router=express.Router();
const controlador =require("../Controladores/ContrArrend");
router.use(express.json());



router.post("/arrendatarios", controlador.CrearArrendatario);
router.get("/arrendatarios", controlador.totalArrendatario);
router.get("/arrendatarios/:cve_catastral", controlador.leerArrendatario);
router.delete("/arrendatarios/:cve_catastral", controlador.eliminarArrendatario);
router.put("/arrendatarios/:id", controlador.modificarArrendatario);


module.exports = router;