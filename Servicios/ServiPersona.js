const models = require('../Renta-Relaciones/models');

const create = async function(RFC,Nombre)
{  
 
    const Persona = await models.Personas.create(
        {
            RFC:RFC,
            Nombre:Nombre,
            createdAt: new Date(),
            updateAt: new Date()
            
        }
    );
    console.log(JSON.stringify(Persona));
        return Persona
}


const eliminarPersona = async function(RFC)
{
    const valor = await models.Personas.findOne({
        where:{
            RFC:RFC
        }
    });

    await valor.destroy();
}

const leerPersonas = async function()
{
    let valor = await models.Personas.findAll({});
    //console.log(JSON.stringify(valor));
    return valor;
}
const leerPersona = async function(RFC)
{
    const valor = await models.Personas.findOne({
        where:{
            RFC:RFC
        }
    });

    return valor;
}

const modificarPersona=async function(id,RFC,Nombre)
{  
    const valor = await models.Personas.findByPk(id)

    await valor.update({
        RFC:RFC,
        Nombre:Nombre,
        updateAt: new Date()

    });
    console.log(JSON.stringify(valor));
        return valor
}


module.exports.leerPersonas=leerPersonas;
module.exports.leerPersona=leerPersona;
module.exports.eliminarPersona=eliminarPersona;
module.exports.create=create;
module.exports.modificarPersona=modificarPersona;
