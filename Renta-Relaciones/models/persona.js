'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Personas.belongsToMany(models.Propiedads,{through: models.Propietarios,as:"propiedades"})
      models.Personas.belongsToMany(models.Propiedads, {through: models.Arrendatarios})
    }
  }
  Persona.init({
    RFC: {
    type:DataTypes.STRING,
    allowNull: false
    },
    Nombre: {
      type: DataTypes.STRING,
      defaultValue: ''
    }
  }, {
    sequelize,
    modelName: 'Personas',
    tableName: 'personas',
    name: {
      singular:'persona',
      plural: 'personas'
    }
  });
//Relacion Muchos aMuchos
  // Persona.associate=function(models){
   // Persona.belongsToMany(models.propiedad,{
   // through: models.propietario
  //  });
//  };

  return Persona;
};