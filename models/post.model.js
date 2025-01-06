"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
const user_model_1 = __importDefault(require("./user.model"));
class Post extends sequelize_1.Model {
}
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    images: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    modelName: 'Post',
});
Post.belongsTo(user_model_1.default, { foreignKey: 'userId', onDelete: 'CASCADE' });
user_model_1.default.hasMany(Post, { foreignKey: 'userId' });
exports.default = Post;
