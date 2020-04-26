const { Router } = require('express');
const ProductController = require('../controllers/products.controller');
const CategoriesController = require('../controllers/categories.controller');
const CommentsController = require('../controllers/comments.controller');
const router = Router();

router.post(
  '/products',
    ProductController.loadPart
);

router.post(
    '/product',
    ProductController.getById
);
router.get(
  '/categories',
    CategoriesController.getCategories
);
router.post(
  '/comments',
    CommentsController.getComments
);
module.exports = router;
