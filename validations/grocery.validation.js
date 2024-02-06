const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createGrocery = {
  body: Joi.object().keys({
    itemName: Joi.string().required(),
    quantity: Joi.number().integer().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    brand: Joi.string().required(),
  }),
};

const getGroceries = {
  query: Joi.object().keys({
    itemName: Joi.string(),
    category: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getGrocery = {
  params: Joi.object().keys({
    id: Joi.number().integer(),
  }),
};

const updateGrocery = {
  params: Joi.object().keys({
    id: Joi.number().integer().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      itemName: Joi.string(),
      quantity: Joi.number().integer(),
      price: Joi.number(),
      category: Joi.string(),
      brand: Joi.string(),
    })
    .min(1),
};

const deleteGrocery = {
  params: Joi.object().keys({
    id: Joi.number().integer().required().custom(objectId),
  }),
};

module.exports = {
  createGrocery,
  getGroceries,
  getGrocery,
  updateGrocery,
  deleteGrocery,
};
