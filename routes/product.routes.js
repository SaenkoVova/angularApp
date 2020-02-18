const { Router } = require('express');
const ProductController = require('../controllers/products.controller');
const router = Router();

router.post(
  '/products',
    ProductController.loadPart
);

router.post(
    '/product',
    ProductController.getById
);
module.exports = router;
