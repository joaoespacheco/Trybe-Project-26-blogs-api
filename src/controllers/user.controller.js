const userService = require('../services/user.service');
const errorMap = require('../utils/errorMap');

const createUser = async (req, res) => {
  const body = await userService.validateUser(req.body);
  if (body.type) return res.status(errorMap.setError(body.type)).json({ message: body.message });

  const token = await userService.createUser(body);
  if (token.type) return res.status(errorMap.setError(token.type)).json({ message: token.message });

  res.status(201).json({ token });
};

const findAll = async (req, res) => {
  const users = await userService.findAll();

  res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(id);
  if (!user) res.status(404).json({ message: 'User does not exist' });

  res.status(200).json(user);
};

const removeUser = async (req, res) => {
  const { id } = req.user;
  await userService.removeUser(id);
  res.status(204).end();
};

module.exports = {
  createUser,
  findAll,
  findById,
  removeUser,
};