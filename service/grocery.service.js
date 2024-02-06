const db = require("../models");
const Grocery = db.grocery; 

const createGrocery = async (params) => {
    const { itemName, quantity, price, category, brand } = params;
  
    try {
      const [createdGrocery, created] = await Grocery.findOrCreate({
        where: { itemName: itemName },
        defaults: {
          itemName,
          quantity,
          price,
          category,
          brand,
        },
      });
  
      if (created) {
        return createdGrocery;
      } else {
        return { error: 'Duplicate entry. Item with the same name already exists.' };
      }
    } catch (error) {
      console.error('Error creating grocery:', error);
      return { error: 'Internal Server Error' };
    }
  };
  

const getAllGroceries = async (filter, options) => {
    const groceries = await Grocery.findAll();
    return groceries;
};

const getGroceryById = async (id) => {
    return Grocery.findOne({ where: { id } });
};

const updateGroceryById = async (groceryId, updateBody) => {
    const { itemName, quantity, price, category, brand } = updateBody;
    const grocery = {
        itemName,
        quantity,
        price,
        category,
        brand,
    };

    const row = await Grocery.update(grocery, {
        where: { id: groceryId },
    });

    return row;
};

const deleteGroceryById = async (groceryId) => {
    const grocery = await getGroceryById(groceryId);
    if (!grocery) return null;
    await grocery.destroy();
    return grocery;
};

module.exports = {
    createGrocery,
    getAllGroceries,
    getGroceryById,
    updateGroceryById,
    deleteGroceryById,
};
