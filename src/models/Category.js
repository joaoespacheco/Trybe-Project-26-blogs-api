module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  });

  return Category;
}