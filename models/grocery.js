const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Grocery extends Model {
    static associate(models) {
      Grocery.belongsTo(models.inventory, {
        foreignKey: 'inventoryId', 
        as: 'inventory', 
      });
    } 
  }

  Grocery.init({
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
    inventoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'inventory', 
        key: 'id', 
      },
    },
  }, {
    sequelize,
    modelName: 'grocery', 
  });

  return Grocery;
};
