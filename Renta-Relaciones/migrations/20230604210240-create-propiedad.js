'use strict';
//** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize)=> {
    return queryInterface.createTable('Propiedads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cve_catastral: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull:true

      },
      direccion: {
        type: Sequelize.STRING,
        allowNull:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down:(queryInterface, Sequelize) => {
    return queryInterface.dropTable('Propiedads');
  }
};