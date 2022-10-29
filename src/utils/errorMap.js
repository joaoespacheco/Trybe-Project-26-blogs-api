const errorMap = {
  INVALID_VALUE: 400,
  INVALID_LOGIN: 400,
  INVALID_TOKEN: 401,
  INVALID_USER: 401,
  USER_CONFLICT: 409,
  CATEGORY_CONFLICT: 409,
};

const setError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  setError,
};