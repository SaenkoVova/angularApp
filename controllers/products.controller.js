const Product = require('../models/Product');
const ObjectID = require('mongoose').Types.ObjectId;

exports.loadPart = async (req, res) => {
    let products = [];
    const productQuantity = await Product.countDocuments();
    const { pageSize, pageIndex } = req.body;
    if(pageIndex === 0) {
        products = await Product.find().limit(pageSize);
    }
    else {
        products = await Product.find().skip(pageIndex * pageSize).limit(pageSize);
    }
    res.status(200).json({
        length: productQuantity,
        array: products
    });
};

exports.getById = async (req, res) => {
    const {id} = req.body;
    const product = await Product.find({_id: ObjectID(id)});
    res.status(200).json(
       ...product
    );
};
