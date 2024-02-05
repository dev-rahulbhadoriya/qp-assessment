const db = require("../models");
const Grocery = db.grocery; 
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const groceryServices = require("../service/grocery.service");

const createGrocery = catchAsync(async (req, res) => {
    const grocery = await groceryServices.createGrocery(req.body);
    if (grocery) {
        res.send({ grocery });
        return;
    }
    res.status(httpStatus.CONFLICT).send({
        "message": "Grocery item already exists",
    });
});

const getGroceryById = catchAsync(async (req, res) => {
    const grocery = await groceryServices.getGroceryById(req.params.id);
    if (!grocery) {
        res.send({
            "message": "Grocery item not found",
        });
        return;
    }
    res.send({ grocery });
});

const updateGrocery = catchAsync(async (req, res) => {
    const row = await groceryServices.updateGroceryById(req.params.id, req.body);
    if (!row) {
        res.send({
            "message": "Grocery item not found",
        });
        return;
    }

    res.send(await groceryServices.getGroceryById(req.params.id));
});

const deleteGrocery = catchAsync(async (req, res) => {
    const deleted = await groceryServices.deleteGroceryById(req.params.id);
    if (!deleted) {
        res.send({
            "message": "Grocery item not found",
        });
    }
    res.status(httpStatus.NO_CONTENT).send();
});

const getAllGroceries = catchAsync(async (req, res) => {
    const groceries = await Grocery.findAll();
    res.send({ groceries });
});

module.exports = {
    createGrocery,
    getGroceryById,
    updateGrocery,
    deleteGrocery,
    getAllGroceries
};
