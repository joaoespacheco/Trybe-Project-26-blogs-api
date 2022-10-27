const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(authMiddleware.validateToken);

router.post('/', categoriesController.createCategory);

module.exports = router;