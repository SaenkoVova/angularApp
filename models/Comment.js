const { Schema, model } = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const schema = new Schema({
    productId: {type: String, required: true},
    userId: {type: String, required: false, default: ''},
    text: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: false},
    date: {type: Date, required: true, default: Date.now()},
    likesCounter: {type: Number, required: true, default: 0},
    dislikesCounter: {type: Number, required: true, default: 0},
    rating: {type: Number, required: true, default: 0},
    responds: {type: Array, required: false, default: []}
});

module.exports = model('Comment', schema);
