import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';
import User from './user.model';

class Post extends Model {
  id!: number;
  title!: string;
  description!: string;
  userId!: number;
  images!: string;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    images: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Post',
  }
);

Post.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Post, { foreignKey: 'userId' });

export default Post;
