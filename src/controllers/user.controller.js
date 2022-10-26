const userService = require('../services/user.service');
const errorMap = require('../utils/errorMap');

const createUser = async (req, res) => {
  const body = await userService.validateUser(req.body);
  if (body.type) return res.status(errorMap.setError(body.type)).json({ message: body.message });

  const token = await userService.createUser(body);
  if (token.type) return res.status(errorMap.setError(token.type)).json({ message: token.message });

  res.status(201).json({ token });
};

module.exports = {
  createUser,
};