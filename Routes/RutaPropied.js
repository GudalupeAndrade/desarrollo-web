const express =require("express");
const router=express.Router();
const ContPropd =require("../Controladores/ContPropied");
router.use(express.json());



router.post("/propiedades", ContPropd.CrearPropiedad);
router.get("/propiedades", ContPropd.totalPropiedades);
router.get("/propiedades/:cve_catastral", ContPropd.leerPropiedad);
router.delete("/propiedades/:cve_catastral", ContPropd.eliminarPropiedad);
router.put("/propiedades/:id", ContPropd.modificarPropiedad);






module.exports = router;
