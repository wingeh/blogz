const User = require('./user-model');
const Post = require('./post-model');
const Comment = require('./comment-model');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {   
    foreignKey: "post_id"
});

Comment.belongsTo(Post, {
    foreignKey: "post_id"
});

module.exports = { User, Post, Comment };