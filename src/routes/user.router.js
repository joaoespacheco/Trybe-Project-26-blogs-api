const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', userController.createUser);

router.use(authMiddleware.validateToken);

router.get('/', userController.findAll);
router.get('/:id', userController.findById);

module.exports = router;