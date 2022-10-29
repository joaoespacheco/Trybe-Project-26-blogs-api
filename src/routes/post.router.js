const express = require('express');
const postController = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(authMiddleware.validateToken);

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);

module.exports = router;