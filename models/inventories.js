// ...

module.exports = (sequelize) => {
    class Inventory extends Model {
      static associate(models) {
        Inventory.belongsTo(models.grocery);
      }
    }
  
    Inventory.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      lastStockedAt: {
        type: DataTypes.DATE,
      },
      // Additional fields
      minQuantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        comment: 'Minimum quantity threshold for reordering',
      },
      maxQuantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        comment: 'Maximum quantity threshold for optimal stock',
      },
      reorderQuantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        comment: 'Quantity to reorder when reaching the minimum threshold',
      },
    }, {
      sequelize,
      modelName: 'inventory',
    });
  
    return Inventory;
  };
  