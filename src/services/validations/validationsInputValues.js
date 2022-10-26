const schemas = require('./schemas');

const validateLoginBody = (body) => {
  const { error, value } = schemas.loginSchema.validate(body);
  if (error) {
  return { type: 'INVALID_VALUE', message: 'Some required fields are missing', value: '' }; 
  }

  return { type: null, message: '', value };
};

module.exports = {
  validateLoginBody,
};