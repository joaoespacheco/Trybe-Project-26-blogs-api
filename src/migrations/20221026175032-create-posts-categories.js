module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      postId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      categoryId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('posts_categories');
  },
};