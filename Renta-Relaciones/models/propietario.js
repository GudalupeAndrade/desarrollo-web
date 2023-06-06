'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Propietario extends Model {
    
    static associate(models) {
     
    }
  }
  Propietario.init({
    Persona_id: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }, 
    Propiedad_id:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
   
  }, {
    sequelize,
    modelName: 'Propietario',
    tableName: 'Propietarios',
    name: {
      singular:'propietario',
      plural: 'propietarios'
    }
  });
  return Propietario;
};