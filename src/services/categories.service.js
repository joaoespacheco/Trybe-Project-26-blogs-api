const validations = require('./validations/validationsInputValues');
const { Category } = require('../models');

const createUser = async (body) => {
  const { type, message } = validations.validateCategoryBody(body);
  if (type) return { type, message };

  const { name } = body;
  const CategoryValidate = await Category.findOne({ where: { name } });
  if (CategoryValidate) {
    return { type: 'CATEGORY_CONFLICT', message: 'Category already registered' }; 
  }

  await Category.create(body);

  const newCategory = await Category.findOne({ where: { name } });

  return { type: null, message: newCategory };
};

const getAllCategory = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createUser,
  getAllCategory,
};
