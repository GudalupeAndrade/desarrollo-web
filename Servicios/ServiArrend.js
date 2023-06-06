const models = require('../Renta-Relaciones/models');

const asignarArrendatario = async function(Propiedad_id,Persona_id)
{
 
    const arrendatario = await models.arrendatario.create(
        {
            Propiedad_id:Propiedad_id,
            Persona_id:Persona_id,
            createdAt: new Date(),
            updateAt: new Date()
            
        }
    );
    console.log(JSON.stringify(arrendatario));
        return arrendatario
}


const eliminarArrendatario = async function(findid)
{
    const propied = await models.arrendatario.findOne({
        where:{
            id:findid
        }
    });

    await propied.destroy();
}

const leerArrendatarios = async function()
{
    let propieds = await models.arrendatario.findAll({});
    //console.log(JSON.stringify(propieds));
    return propieds;
}
const leerArrendatario = async function(findid)
{
    let propieds = await models.arrendatario.findOne(findid);
    //console.log(JSON.stringify(propieds));
    return propieds;
}



module.exports.leerArrendatarios=leerArrendatarios;
module.exports.leerArrendatario=leerArrendatario;
module.exports.eliminaeArrendatario=eliminarArrendatario;
module.exports.asignarArrendatario=asignarArrendatario;

