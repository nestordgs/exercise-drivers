'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define('Cities', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stateId: {
      type: DataTypes.INTEGER,
    }
  }, {
    timestamps: false
  });
  Cities.associate = function(models) {
    // associations can be defined here
    Cities.hasMany(models.Drivers, {
      foreignKey: 'cityId',
      as: 'drivers'
    });
    Cities.belongsTo(models.States, {
      foreignKey: 'id',
      onDelete: 'SET NULL'
    })
  };
  return Cities;
};
