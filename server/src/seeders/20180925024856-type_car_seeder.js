'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Type_Cars', [
      {
        name: "Motocicleta"
      },
      {
        name: "Vehículo mixto adaptable"
      },
      {
        name: "Turismo"
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Type_Cars', null, {});
  }
};
