
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
          itemName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          price: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          category: {
            type: DataTypes.STRING,
          },
          brand: {
            type: DataTypes.STRING,
          },
    }, {
      sequelize,
      modelName: 'grocery',
    });
  
  
    return grocery;
  };
  

