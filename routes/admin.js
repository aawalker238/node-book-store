const router = require('express').Router();
const path = require('path');
const rootDir = require('../utils/path');
const adminController = require('../controllers/admin');

// GET /admin/add-product
router.get('/add-product', adminController.getAddProduct);

// GET /admin/products
router.get('/products', adminController.getProducts);

// POST /admin/add-product
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
