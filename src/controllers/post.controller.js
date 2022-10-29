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

module.exports = {
  createPost,
  getAllPosts,
};