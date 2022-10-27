const jwtUtil = require('../utils/jwt.util');
const validations = require('./validations/validationsInputValues');
const { User } = require('../models');

const validateUser = async (body) => {
  const { type, message, value } = validations.validateUserBody(body);
  if (type) return { type, message };

  const { email } = value;

  const userValidate = await User.findOne({ where: { email } });
  if (userValidate) { return { type: 'USER_CONFLICT', message: 'User already registered' }; }

  return value;
};

const createUser = async (body) => {
  await User.create({ ...body });

  const { email } = body;

  const user = await User.findOne({ where: { email } });
  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

const findAll = async () => { 
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

const findById = async (id) => { 
  const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
  return user;
};

module.exports = {
  validateUser,
  createUser,
  findAll,
  findById,
};