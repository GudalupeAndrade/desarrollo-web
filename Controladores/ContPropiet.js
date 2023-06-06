const propietarios = require("../Servicios/ServiPropiet");


const CrearPropietario = async function (req, res) {
        let nuevo = { Propiedad_id: req.query.Propiedad_id, Persona_id: req.query.Persona_id};
        await propietarios.create(nuevo.Propiedad_id,nuevo.Persona_id);
        await res.json("propietario Agregada");
    }
    
    const totalPropietarios = async function (req, res) {
        let datos = await propietarios.leerPropietarios();
        await res.json(datos);
    }
     const leerPropietario =async function (){
        let nuevo = { id:req.query.id};
        let datos = await propietarios.leerPropietario(id);
        await res.json(datos);
    
     }
    const eliminarPropietario = async function (req, res) {
        let nuevo = { id: req.query.id};
        let datos = await propietarios.eliminarPropietario(id);
        await res.json(datos);
    
    }
    
    
    
    module.exports.CrearPropietario = CrearPropietario;
    module.exports.totalPropietarios = totalPropietarios;
    module.exports.eliminarPropietario = eliminarPropietario;
    module.exports.leerPropietario= leerPropietario;