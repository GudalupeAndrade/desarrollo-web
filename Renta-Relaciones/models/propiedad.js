'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Propiedads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Propiedads.belongsToMany(models.Personas, {through: models.Propietarios,as:"propietarios"})
      models.Propiedads.belongsToMany(models.Personas, {through: models.Arrendatarios})
    }
  }
  Propiedads.init({
    cve_catastral: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    descripcion: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Propiedads',
    tableName: 'propiedads',
    name: {
      singular:'propiedads',
      plural: 'propiedads'
    }
  });
  return Propiedads;
};