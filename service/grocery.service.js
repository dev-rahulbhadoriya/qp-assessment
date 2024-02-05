const db = require("../models");
const Grocery = db.grocery; 

const createGrocery = async (params) => {
    const { itemName, quantity, price, category, brand } = params;
    const grocery = {
        itemName,
        quantity,
        price,
        category,
        brand,
    };

    const [row, created] = await Grocery.findOrCreate({
        where: { itemName: grocery.itemName },
        defaults: grocery,
    });

    if (created) {
        return row;
    }

    return null;
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
