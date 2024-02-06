const express = require('express');
const validate = require('../../middleware/validate');
const groceryController = require('../../controller/grocery.controller');
const auth = require("../../middleware/auth");
const groceryValidation = require('../../validations/grocery.validation')

const router = express.Router();

router
  .route('/')
  .post(auth('manageGroceries'), validate(groceryValidation.createGrocery), groceryController.createGrocery)
  .get(auth('getGroceries'), validate(groceryValidation.getGroceries), groceryController.getAllGroceries);

router
  .route('/:id')
  .get(auth('getGroceries'), validate(groceryValidation.getGrocery), groceryController.getGroceryById)
  .put(auth('manageGroceries'), validate(groceryValidation.updateGrocery), groceryController.updateGrocery)
  .delete(auth('manageGroceries'), validate(groceryValidation.deleteGrocery), groceryController.deleteGrocery);


module.exports = router;
