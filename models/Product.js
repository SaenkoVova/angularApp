const { Schema, model } = require('mongoose');

const schema = new Schema({
    discountPrice: { type: Number, required: false },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    title: { type: String, required: true }
});

module.exports = model('Product', schema);
