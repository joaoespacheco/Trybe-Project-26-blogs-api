const authService = require('../services/auth.service');
const errorMap = require('../utils/errorMap');

const login = async (req, res) => {
  const body = await authService.validateBody(req.body);
  console.log(req.body);
  if (body.type) return res.status(errorMap.setError(body.type)).json({ message: body.message });

  const token = await authService.validateLogin(body);
  if (token.type) return res.status(errorMap.setError(token.type)).json({ message: token.message });

  res.status(200).json({ token });
};

module.exports = {
  login,
};