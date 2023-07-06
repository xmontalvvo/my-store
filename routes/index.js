const express = require('express');

const productsRouter = require('./products.js')
const usersRouter = require('./users.js')
const categoriesRouter = require('./categories.js')

function routerApi(app) {
    const router = express.Router(); //Crear path global para todos los endpoints
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
  }

  module.exports = routerApi;

module.exports = routerApi
