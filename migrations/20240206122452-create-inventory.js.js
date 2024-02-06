'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('inventories', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      lastStockedAt: {
        type: Sequelize.DATE,
      },
      minQuantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        comment: 'Minimum quantity threshold for reordering',
      },
      maxQuantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        comment: 'Maximum quantity threshold for optimal stock',
      },
      reorderQuantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        comment: 'Quantity to reorder when reaching the minimum threshold',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      // Foreign key for GroceryId
      GroceryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'groceries',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('inventories');
  },
};
