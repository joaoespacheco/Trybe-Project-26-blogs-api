const schemas = require('./schemas');

const validateLoginBody = (body) => {
  const { error, value } = schemas.loginSchema.validate(body);
  if (error) {
    return {
      type: 'INVALID_VALUE',
      message: 'Some required fields are missing',
      value: '',
    };
  }

  return { type: null, message: '', value };
};

const validateUserBody = (body) => {
  const { error, value } = schemas.userSchema.validate(body);
  if (error) {
    return {
      type: 'INVALID_VALUE',
      message: error.message,
      value: '',
    };
  }

  return { type: null, message: '', value };
};

const validateCategoryBody = (body) => {
  const { error } = schemas.categoriesSchema.validate(body);
  if (error) {
  return {
    type: 'INVALID_VALUE',
    message: error.message,
  };
  }

    return { type: null, message: '' };
};

const validatePostBody = (body) => {
  const { error } = schemas.postSchema.validate(body);
  if (error) {
  return {
    type: 'INVALID_VALUE',
    message: 'Some required fields are missing',
  };
  }

    return { type: null, message: '' };
};

module.exports = {
  validateLoginBody,
  validateUserBody,
  validateCategoryBody,
  validatePostBody,
};
