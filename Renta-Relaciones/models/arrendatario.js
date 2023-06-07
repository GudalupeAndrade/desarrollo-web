'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arrendatario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Arrendatario.init({
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
    modelName: 'Arrendatarios',
    tableName: 'arrendatarios',
    name: {
      singular:'arrendatario',
      plural: 'arrendatarios'
    }
  });
  return Arrendatario;
};