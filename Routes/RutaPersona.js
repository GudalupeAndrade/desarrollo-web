const express =require("express");
const router=express.Router();
const ContPropd =require("../Controladores/ContPersona");
router.use(express.json());



router.post("/personas", ContPropd.CrearPersona);
router.get("/personas", ContPropd.totalPersonas);
router.get("/personas/:RFC", ContPropd.leerPersona);
router.delete("/personas/:RFC", ContPropd.eliminarPersona);
router.put("/personas/:id", ContPropd.modificarPersona);






module.exports = router;