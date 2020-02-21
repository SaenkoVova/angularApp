const { Schema, model } = require('mongoose');

const schema = new Schema({
    productId: {type: String, required: true},
    userId: {type: String, required: false},
    text: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    date: {type: Date.now(), required: true},
    likesCounter: {type: Number, required: false},
    dislikesCounter: {type: Number, required: false}
});

module.exports = model('Comment', schema);
