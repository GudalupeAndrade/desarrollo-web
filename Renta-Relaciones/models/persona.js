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
      // define association here
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
    modelName: 'Persona',
    tableName: 'Personas',
    name: {
      singular:'persona',
      plural: 'personas'
    }
  });
  return Persona;
};