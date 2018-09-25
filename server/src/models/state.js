module.exports = (sequelize, DataTypes) => {
  const States = sequelize.define('States', {
    short_name: DataTypes.STRING,
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  States.associate = function(models) {
    // associations can be defined here
    States.hasMany(models.Drivers, {
      foreignKey: 'stateId',
      as: 'drivers'
    });
    States.hasMany(models.Cities, {
      foreignKey: 'stateId',
      as: 'cities'
    });
  };
  return States;
};
