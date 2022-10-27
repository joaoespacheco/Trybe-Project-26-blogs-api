const authJwt = require('../utils/jwt.util');
const errorMap = require('../utils/errorMap');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const { type, message } = authJwt.validateToken(authorization);
  
  if (message === 'invalid token' || message === 'jwt malformed') {
    return res.status(errorMap.setError(type)).json({ message: 'Expired or invalid token' });
  }

  if (message === 'jwt must be provided') {
    return res.status(errorMap.setError(type)).json({ message: 'Token not found' });
  }

  req.user = message;
  next();
};

module.exports = { validateToken };
