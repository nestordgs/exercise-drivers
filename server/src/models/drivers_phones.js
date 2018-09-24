module.exports = (sequelize, DataTypes) => {
  const Drivers_Phones = sequelize.define('Drivers_Phones', {
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Drivers_Phones.associate = function(models) {
    // associations can be defined here
    Drivers_Phones.belongsTo(models.Drivers, {
      foreignKey: 'driverId',
      onDelete: 'CASCADE'
    });
  };
  return Drivers_Phones;
};
