const models = require('../Renta-Relaciones/models');

const create = async function(cve_catastral,descripcion,direccion)
{
 
    const Propiedad = await models.propiedad.create(
        {
            cve_catastral:cve_catastral,
            descripcion:descripcion,
            direccion:direccion,
            createdAt: new Date(),
            updateAt: new Date()
            
        }
    );
    console.log(JSON.stringify(Propiedad));
        return Propiedad
}


const eliminarPropiedad = async function(findid)
{
    const propied = await models.propiedad.findOne({
        where:{
            id:findid
        }
    });

    await propied.destroy();
}

const leerPropiedades = async function()
{
    let propieds = await models.propiedad.findAll({});
    //console.log(JSON.stringify(propieds));
    return propieds;
}
const leerPropiedad = async function(findid)
{
    let propieds = await models.propiedad.findOne(findid);
    //console.log(JSON.stringify(propieds));
    return propieds;
}



module.exports.leerPropiedades=leerPropiedades;
module.exports.leerPropiedad=leerPropiedad;
module.exports.eliminarPropiedad=eliminarPropiedad;
module.exports.create=create;

