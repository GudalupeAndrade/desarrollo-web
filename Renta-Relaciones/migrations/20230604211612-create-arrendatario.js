'use strict';

//const { Sequelize } = require('../models');

//** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize)=> {
    return queryInterface.createTable('Arrendatarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Persona_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "personas",
          key:"id"
        },

      },
      Propiedad_id: {
        type: Sequelize.INTEGER,
        references:{
        model: "propiedads",
          key:"id"
        },

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
    return queryInterface.dropTable('Arrendatarios');  
   }
  //async down(queryInterface, Sequelize) {
    //await queryInterface.dropTable('Arrendatarios');
  //}
};