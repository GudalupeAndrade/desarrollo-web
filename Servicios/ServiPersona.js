const models = require('../Renta-Relaciones/models');

const create = async function(RFC,Nombre)
{
 
    const Persona = await models.Persona.create(
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


const eliminarPersona = async function(findid)
{
    const propied = await models.Persona.findOne({
        where:{
            id:findid
        }
    });

    await propied.destroy();
}

const leerPersonas = async function()
{
    let propieds = await models.Persona.findAll({});
    //console.log(JSON.stringify(propieds));
    return propieds;
}
const leerPersona = async function(findid)
{
    let propieds = await models.Persona.findOne(findid);
    //console.log(JSON.stringify(propieds));
    return propieds;
}



module.exports.leerPersonas=leerPersonas;
module.exports.leerPersona=leerPersona;
module.exports.eliminarPersona=eliminarPersona;
module.exports.create=create;

