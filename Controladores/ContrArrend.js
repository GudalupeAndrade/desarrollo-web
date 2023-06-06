const arrendatarios = require("../Servicios/ServiArrend");


const CrearArrendatario = async function (req, res) {
        let nuevo = { Propiedad_id: req.query.Propiedad_id, Persona_id: req.query.Persona_id};
        await arrendatarios.create(nuevo.Propiedad_id,nuevo.Persona_id);
        await res.json("arrendatario Agregada");
    }
    
    const totalArrendatarios = async function (req, res) {
        let datos = await arrendatarios.leerArrendatarios();
        await res.json(datos);
    }
     const leerArrendatario =async function (){
        let nuevo = { id:req.query.id};
        let datos = await arrendatarios.leerArrendatario(id);
        await res.json(datos);
    
     }
    const eliminarArrendatario = async function (req, res) {
        let nuevo = { id: req.query.id};
        let datos = await arrendatarios.eliminarArrendatario(id);
        await res.json(datos);
    
    }
    
    
    
    module.exports.CrearArrendatario = CrearArrendatario;
    module.exports.totalArrendatarios = totalArrendatarios;
    module.exports.eliminarArrendatario = eliminarArrendatario;
    module.exports.leerArrendatario= leerArrendatario;