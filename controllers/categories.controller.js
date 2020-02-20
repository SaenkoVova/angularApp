const Category = require('../models/Categorie');

exports.getCategories = async (req, res) => {
    let categories = await Category.find();

    res.status(200).json(categories);
};
