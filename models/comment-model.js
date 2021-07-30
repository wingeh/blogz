const { INTEGER } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    post_id: {
        type: DataTypes>INTEGER,
        references: {
            model: 'post',
            id: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            id: 'id'
        }
    }        
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips',
    }
);

module.exports = Comment;