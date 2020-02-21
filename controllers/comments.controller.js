const Comment = require('../models/Comment');

exports.getComments = async (req, res) => {
    let comments = await Comment.find();
    res.status(200).json(comments);
};

exports.sendComment = async (req, res) => {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(200).json({
        message: 'Ваш відгук додано'
    })
};

exports.sendRespond = async (req, res) => {

};
