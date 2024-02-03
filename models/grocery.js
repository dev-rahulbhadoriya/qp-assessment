
const {
    Model
  } = require('sequelize');

  module.exports = (sequelize, DataTypes) => {
    class grocery extends Model {
      static associate(models) {

      }
    }
    grocery.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          category: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          price: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    }, {
      sequelize,
      modelName: 'grocery',
    });
  
  
    return grocery;
  };
  

