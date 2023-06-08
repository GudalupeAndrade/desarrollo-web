const propietario = require("../Servicios/ServiPropiet");


const agregarPropietario=async function(req, res){
    let nuevo = { id_Persona: req.query.id_Persona,
                  id_Propiedad: req.query.id_Propiedad };
    await propietario.asignar(nuevo.id_Persona,nuevo.id_Propiedad);
    await res.json("Propietario Asiganado");

}

module.exports.agregarPropietario = agregarPropietario;