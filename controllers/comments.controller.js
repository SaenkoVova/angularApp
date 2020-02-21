const Comment = require('../models/Comment');

exports.getCategories = async (req, res) => {
    let categories = await Category.find();

    res.status(200).json(categories);
};
