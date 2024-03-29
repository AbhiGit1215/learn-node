const express = require('express');
const router = express.Router();
const path = require('path');
const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.use('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;
