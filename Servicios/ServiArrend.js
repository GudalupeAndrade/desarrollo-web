const models = require('../Renta-Relaciones/models');

const asignarArrendatario = async function(Propiedad_id,Persona_id)
{
 
    const Arrendatario = await models.Arrendatario.create(
        {
            Propiedad_id:Propiedad_id,
            Persona_id:Persona_id,
            createdAt: new Date(),
            updateAt: new Date()
            
        }
    );
    console.log(JSON.stringify(Arrendatario));
        return Arrendatario
}


const eliminarArrendatario = async function(findid)
{
    const propied = await models.Arrendatario.findOne({
        where:{
            id:findid
        }
    });

    await propied.destroy();
}

const leerArrendatarios = async function()
{
    let propieds = await models.Arrendatario.findAll({});
    //console.log(JSON.stringify(propieds));
    return propieds;
}
const leerArrendatario = async function(findid)
{
    let propieds = await models.Arrendatario.findOne(findid);
    //console.log(JSON.stringify(propieds));
    return propieds;
}



module.exports.leerArrendatarios=leerArrendatarios;
module.exports.leerArrendatario=leerArrendatario;
module.exports.eliminaeArrendatario=eliminarArrendatario;
module.exports.asignarArrendatario=asignarArrendatario;

