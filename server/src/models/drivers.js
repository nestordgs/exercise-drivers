module.exports = (sequelize, DataTypes) => {
  const Drivers = sequelize.define('Drivers', {
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: `This don't look like an email` },
        notEmpty: { msg: `The email is required` },
        isUnique(value, next) {
          Drivers.findOne({
            where: {email: value},
            attributes: ['id']
          }).then((driver) => {
            if (driver) {
              return next(`The email "${value}" is already in use`)
            }
            next()
          })
        }
      }
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
    },
    zipCode: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 10],
        isZipCode(value, next) {
          // example = 90210
          if (! /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value) ) {
            return next(`The Zip Code provided is wrong`)
          }
          next()
        }
      }
    },
    typeCarId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carYear: {
      type: DataTypes.DATE,
    },
  }, {
    indexes: [
      {
        unique: true,
        fields: ['email']
      },
    ]
  });
  Drivers.associate = function(models) {
    // associations can be defined here
    Drivers.hasMany(models.Drivers_Phones, {
      foreignKey: 'driverId',
      as: 'phones'
    });
    Drivers.belongsTo(models.States, {
      onDelete: 'SET NULL'
    })
    Drivers.belongsTo(models.Cities, {
      onDelete: 'SET NULL'
    })
    Drivers.belongsTo(models.Type_Cars, {
      onDelete: 'SET NULL'
    })
  };
  return Drivers
};
