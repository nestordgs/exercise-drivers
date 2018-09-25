module.exports = (sequelize, DataTypes) => {
  const Type_Cars = sequelize.define('Type_Cars', {
    name: DataTypes.STRING
  }, {
    timestamps: false
  });
  Type_Cars.associate = function(models) {
    // associations can be defined here
    Type_Cars.hasMany(models.Drivers, {
      foreignKey: 'typeCarId',
      as: 'drivers'
    });
  };
  return Type_Cars;
};
