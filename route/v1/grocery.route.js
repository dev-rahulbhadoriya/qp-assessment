const express = require('express');
const validate = require('../../middleware/validate');
const groceryController = require('../../controller/grocery.controller');
const auth = require("../../middleware/auth");
const groceryValidation = require('../../validations/grocery.validation')

const router = express.Router();

router
  .route('/groceries')
  .post(auth('admin'), validate(groceryValidation.createGrocery), groceryController.createGrocery)
  .get(auth('user'), validate(groceryValidation.getGroceries), groceryController.getAllGroceries);

router
  .route('/groceries/:id')
  .get(auth('user'), validate(groceryValidation.getGrocery), groceryController.getGroceryById)
  .put(auth('admin'), validate(groceryValidation.updateGrocery), groceryController.updateGrocery)
  .delete(auth('admin'), validate(groceryValidation.deleteGrocery), groceryController.deleteGrocery);


module.exports = router;
