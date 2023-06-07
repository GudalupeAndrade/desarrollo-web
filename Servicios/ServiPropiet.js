
const models = require('../Renta-Relaciones/models');

const asignar = async function(Persona_id,id_Propiedad)
{
 
    const Propiedad=await models.Propiedads.findByPk(id_Propiedad);
    const Persona=await models.Personas.findByPk(Persona_id);

  await Propiedad.addPropietarios(Persona)
  return Propiedad;
}

module.exports.asignar=asignar;
