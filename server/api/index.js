'use strict';

const router = require('express').Router();

router.use('/phongs', require('./phongs'));
router.use('/users', require('./users'));
router.use('/tasks', require('./tasks'));
router.use('/plans', require('./plans'));
router.use('/auth', require('./auth'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
