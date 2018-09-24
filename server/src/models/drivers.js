module.exports = (sequelize, DataTypes) => {
  const Drivers = sequelize.define('Drivers', {
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: `This don't look like an email` },
        notEmpty: { msg: `The email is required` }
      }
    }
  }, {
    index: [
      {
        unique: true,
        fields: ['email']
      }
    ],
  });
  Drivers.associate = function(models) {
    // associations can be defined here
    Drivers.hasMany(models.Drivers_Phones, {
      foreignKey: 'driverId',
      as: 'phones'
    });
  };
  return Drivers
};
