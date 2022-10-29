const postService = require('../services/post.service');
const errorMap = require('../utils/errorMap');

const createPost = async (req, res) => {
  const { user, body } = req;
  const { type, message } = await postService.createPost(body, user);

  if (type) return res.status(errorMap.setError(type)).json({ message });

  res.status(201).json(message);
};

const getAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();
  res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);

  if (!post) res.status(404).json({ message: 'Post does not exist' });

  res.status(200).json(post);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};