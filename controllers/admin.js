const Product = require('../models/product');

exports.getAddProduct = ({ res }) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product Page',
    path: '/admin/add-product'
  });
};

exports.postAddProduct = (req, res) => {
  const { title, imageUrl, description, price } = req.body;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      pageTitle: 'Admin Products',
      path: '/admin/products',
      products
    });
  });
};
