const models = require('../Renta-Relaciones/models');

const create = async function(RFC,Nombre)
{
 
    const Persona = await models.persona.create(
        {
            RFC:RFC,
            Nombre:Nombre,
            createdAt: new Date(),
            updateAt: new Date()
            
        }
    );
    console.log(JSON.stringify(persona));
        return Persona
}


const eliminarPersona = async function(findid)
{
    const propied = await models.persona.findOne({
        where:{
            id:findid
        }
    });

    await propied.destroy();
}

const leerPersonas = async function()
{
    let propieds = await models.persona.findAll({});
    //console.log(JSON.stringify(propieds));
    return propieds;
}
const leerPersona = async function(findid)
{
    let propieds = await models.persona.findOne(findid);
    //console.log(JSON.stringify(propieds));
    return propieds;
}



module.exports.leerPersonas=leerPersonas;
module.exports.leerPersona=leerPersona;
module.exports.eliminarPersona=eliminarPersona;
module.exports.create=create;

