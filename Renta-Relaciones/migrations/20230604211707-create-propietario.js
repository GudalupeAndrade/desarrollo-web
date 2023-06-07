'use strict';
///** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize)=> {
    return queryInterface.createTable('Propietarios', {
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
    return queryInterface.dropTable('Propietarios');
  }
};