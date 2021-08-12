const Users = require('./Users');
const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./Users');


User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: 'cascade'
});


Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: 'cascade'
});
Comment.belongsTo(Post, {
    foreignKey: "post_id",
    onDelete: 'cascade'
});
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: 'cascade'
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

module.exports = { User, Comment, Post };