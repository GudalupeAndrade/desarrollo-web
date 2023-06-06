'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class propiedads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //models.propiedads.belongsToMany(models.Persona, {through: models.Propietario, as: "propietarios"})
      //models.propiedads.belongsToMany(models.Persona, {through: models.Arrendatario, as: "arrendatarios"})
    }
  }
  propiedads.init({
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
    modelName: 'propiedad',
    tableName: 'propiedads',
    name: {
      singular:'propiedad',
      plural: 'propiedads'
    }
  });
  return propiedads;
};