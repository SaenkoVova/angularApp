const { Router } = require('express');
const ProductController = require('../controllers/products.controller');
const CategoriesController = require('../controllers/categories.controller')
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
router.get(
  'comments',
);
module.exports = router;
