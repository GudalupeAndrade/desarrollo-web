
const models = require('../Renta-Relaciones/models');

const asignar = async function(Persona_id,id_Propiedad)
{
    const per=await models.Persona.findByPk(Persona_id);
    const prop=await models.Propiedad.findByPk(id_Propiedad);
    
    await per.addPropiedades(prop);
  return "Si";
};



module.exports.asignar=asignar;
