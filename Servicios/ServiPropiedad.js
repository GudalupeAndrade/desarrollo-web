const models = require('../Renta-Relaciones/models');

const create = async function(cve_catastral,descripcion,direccion)
{  
 
    const Propiedad = await models.Propiedad.create(
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


const eliminarPropiedad = async function(clave)
{
    const propied = await models.Propiedad.findOne({
        where:{
            cve_catastral:clave
        }
    });

    await propied.destroy();
}

const leerPropiedades = async function()
{
    let propieds = await models.Propiedad.findAll({});
    //console.log(JSON.stringify(propieds));
    return propieds;
}
const leerPropiedad = async function(clave)
{
    const propieds = await models.Propiedad.findOne({
        where:{
            cve_catastral:clave
        }
    });

    return propieds;
}

const modificarPropiedad=async function(id,cve_catastral,descripcion,direccion)
{  
    const propied = await models.Propiedad.findByPk(id)

    await propied.update({
        cve_catastral:cve_catastral,
        descripcion:descripcion,
        direccion:direccion,
        updateAt: new Date()

    });
    console.log(JSON.stringify(propied));
        return propied
}


module.exports.leerPropiedades=leerPropiedades;
module.exports.leerPropiedad=leerPropiedad;
module.exports.eliminarPropiedad=eliminarPropiedad;
module.exports.create=create;
module.exports.modificarPropiedad=modificarPropiedad;
