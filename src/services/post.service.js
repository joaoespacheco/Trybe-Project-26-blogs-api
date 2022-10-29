const validations = require('./validations/validationsInputValues');
const { BlogPost, Category, PostCategory, User } = require('../models');

const createPostCategory = async ({ categoryIds }, postId) => {
  const postsCategoryIds = categoryIds.map((id) => ({ postId, categoryId: id }));
  await PostCategory.bulkCreate(postsCategoryIds);
};

const createPost = async (body, user) => {
  const { type, message } = validations.validatePostBody(body);
  if (type) return { type, message };

  const getCategories = await Category.findAll();
  const idsOnDb = getCategories.map(({ dataValues }) => dataValues.id);

  const validateIds = body.categoryIds.every((id) => idsOnDb.includes(id));
  if (!validateIds) {
    return { type: 'INVALID_VALUE', message: 'one or more "categoryIds" not found' }; 
  }

  const { null: id } = await BlogPost.create({ ...body, userId: user.id });

  await createPostCategory(body, id);

  const newPost = await BlogPost.findOne({ where: { id } });

  return { type: null, message: newPost };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });

  return posts;
};

module.exports = {
  createPost,
  getAllPosts,
};
