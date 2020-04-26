const Comment = require('../models/Comment');
const { validationResult } = require("express-validator");
const { ObjectId } = require('mongoose').Types.ObjectId;

exports.getComments = async (req, res) => {
    const {id} = req.body;
    let comments = await Comment.find({productId: ObjectId(id)});
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
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некоректні данні при реєстрації'
            });
        }
        const {email, text, name, commentId} = req.body;
        await Comment.updateOne(
            { _id: ObjectId(commentId) },
            { $push: { responds: req.body }}
        );
        res.status(200).json({
            message: 'Respond saved'
        });
    }
    catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
};
