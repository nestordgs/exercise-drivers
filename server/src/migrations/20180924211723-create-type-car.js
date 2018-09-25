module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Type_Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Type_Cars');
  }
};
