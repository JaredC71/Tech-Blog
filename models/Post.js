const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    post_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post_content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "user",
            key: "id"
        }
    },
    
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post"
});

module.exports = Post;