const categoriesService = require('../services/categories.service');
const errorMap = require('../utils/errorMap');

const createCategory = async (req, res) => {
  const { type, message } = await categoriesService.createUser(req.body);

  if (type) return res.status(errorMap.setError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  createCategory,
};