
const models = require('../Renta-Relaciones/models');

const asignarPropietario = async function(Propiedad_id,Persona_id)
{
 
    const Propietario = await models.Propietario.create(
        {
            Propiedad_id:Propiedad_id,
            Persona_id:Persona_id,
            createdAt: new Date(),
            updateAt: new Date()
            
        }
    );
    console.log(JSON.stringify(Propietario));
        return Propietario
}


const eliminarPropietario = async function(findid)
{
    const propied = await models.Propietario.findOne({
        where:{
            id:findid
        }
    });

    await propied.destroy();
}

const leerPropietarios = async function()
{
    let propieds = await models.Propietario.findAll({});
    //console.log(JSON.stringify(propieds));
    return propieds;
}
const leerPropietario = async function(findid)
{
    let propieds = await models.Propietario.findOne(findid);
    //console.log(JSON.stringify(propieds));
    return propieds;
}



module.exports.leerPropietarios=leerPropietarios;
module.exports.leerPropietario=leerPropietario;
module.exports.eliminarPropietario=eliminarPropietario;
module.exports.asignarPropietario=asignarPropietario;

