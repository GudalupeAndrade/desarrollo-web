const personas = require("../Servicios/ServiPersona");

const CrearPersona = async function (req, res) {
    let nuevo = { RFC: req.query.rfc, nombre: req.query.nombre };

    await personas.create(nuevo.RFC,nuevo.nombre);
    await res.json("Persona Agregada");
}

const totalPersonas = async function (req, res) {
    let datos = await personas.leerPersonas();
    await res.json(datos);
}
 const leerPersona =async function (req,res){
    let nuevo = { RFC:req.params.RFC};
    let datos = await personas.leerPersona(nuevo.RFC);
    await res.json(datos);

 }
const eliminarPersona = async function (req, res) {
    let nuevo = { RFC: req.params.RFC};
    let datos = await personas.eliminarPersona(nuevo.RFC);
    await res.json(datos);

}

const modificarPersona = async function (req, res) {
    let nuevo = {id: req.params.id, RFC: req.query.RFC, nombre: req.query.nombre};
    let datos = await personas.modificarPersona(nuevo.id,nuevo.RFC,nuevo.nombre);
    await res.json(datos);

}

module.exports.CrearPersona = CrearPersona;
module.exports.modificarPersona = modificarPersona;
module.exports.totalPersonas = totalPersonas;
module.exports.eliminarPersona = eliminarPersona;
module.exports.leerPersona= leerPersona;