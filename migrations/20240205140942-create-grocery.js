'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('groceries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      itemName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
      },
      brand: {
        type: Sequelize.STRING,
      },
      inventoryId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'inventory',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      
    });

    // Add an index on the foreign key for optimization
    await queryInterface.addIndex('groceries', ['inventoryId']);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('groceries');
  },
};
