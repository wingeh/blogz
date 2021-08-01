
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./seed-users.json');
const postData = require('./seed-posts.json');
const commentData = require('./seed-comments.json');

const seedData = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData);
    await Post.bulkCreate(postData);
    await Comment.bulkCreate(commentData);
    process.exit(0);
};

seedData();