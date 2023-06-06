const personas = require("../Servicios/ServiPersona");

const CrearPersona = async function (req, res) {
    let nuevo = { RFC:req.query.RFC,Nombre:req.query.Nombre };

    await personas.create(nuevo.RFC,nuevo.Nombre);
    await res.json("Persona Agregada");
}

const totalPersonas = async function (req, res) {
    let datos = await personas.leerPersonas();
    await res.json(datos);
}
 const leerPersona =async function (){
    let nuevo = { id:req.query.id};
    let datos = await personas.leerPersona(id);
    await res.json(datos);

 }
const eliminarPersona = async function (req, res) {
    let nuevo = { id: req.query.id};
    let datos = await personas.eliminarPersona(id);
    await res.json(datos);

}



module.exports.CrearPersona = CrearPersona;
module.exports.totalPersonas = totalPersonas;
module.exports.eliminarPersona = eliminarPersona;
module.exports.leerPersona= leerPersona;