const jwtUtil = require('../utils/jwt.util');
const validations = require('./validations/validationsInputValues');
const { User } = require('../models');

const validateBody = async (body) => {
  const { type, message, value } = await validations.validateLoginBody(body);
  if (type) return { type, message };

  return value;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { type: 'INVALID_LOGIN', message: 'Invalid fields' };
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

module.exports = { 
  validateBody,
  validateLogin,
};