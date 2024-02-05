const express = require('express');
const validate = require('../middlewares/validate');
const groceryValidation = require('../../validations/grocery.validation');
const groceryController = require('../../controller/grocery.controller');
const auth = require("../../middleware/auth");

const router = express.Router();

const express = require('express');
const validate = require('../middlewares/validate');
const auth = require('../middlewares/auth'); 
const groceryValidation = require('../validations/grocery.validation');
const groceryController = require('../controllers/grocery.controller');

router
  .route('/groceries')
  .post(auth('manageGroceries'), validate(groceryValidation.createGrocery), groceryController.createGrocery)
  .get(auth('getGroceries'), validate(groceryValidation.getGroceries), groceryController.getGroceries);

router
  .route('/groceries/:id')
  .get(auth('getGroceries'), validate(groceryValidation.getGrocery), groceryController.getGrocery)
  .put(auth('manageGroceries'), validate(groceryValidation.updateGrocery), groceryController.updateGrocery)
  .delete(auth('manageGroceries'), validate(groceryValidation.deleteGrocery), groceryController.deleteGrocery);


module.exports = router;
