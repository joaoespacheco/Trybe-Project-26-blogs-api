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
      { model: Category, as: 'categories' },
    ],
  });

  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories' },
    ],
  });

  return post;
};

const updatePost = async (id, reqBody, user) => {
  const { type, message } = validations.validatePostUpdate(reqBody);
  if (type) return { type, message };

  const validateId = await getPostById(id);
  if (!validateId) return { type: 'INVALID_VALUE', message: 'Post not found' };

  const { user: { dataValues } } = validateId;

  const validateUser = dataValues.id === user.id;
  if (!validateUser) return { type: 'INVALID_USER', message: 'Unauthorized user' };

  await BlogPost.update(
    { ...reqBody },
    { where: { id } },
  );

  const postUpdated = await getPostById(id);

  return { type: null, message: postUpdated };
};
 
const excludePost = async (userId, postId) => {
  const post = await getPostById(postId);
  
  if (!post) return { type: 404, message: 'Post does not exist' };

  if (post.userId !== userId) {
    return { type: 401, message: 'Unauthorized user' };
  }

  await BlogPost.destroy({ where: { id: postId } });
  return { type: null, message: '' };
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  excludePost,
};
