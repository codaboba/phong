const router = require('express').Router();
const { User } = require('../db');

const userNotFound = next => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
};

router.get('/me', async (req, res, next) => {
  try {
    const user = await User.findById(req.session.userId);
    if (user) res.json(user);
  } catch (err) {
    next(err);
  }
});

// router.use('/google', require('./oauth'));

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    req.session.userId = user.id;
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (user) {
      req.session.userId = user.id;
      res.json(user);
    } else {
      res.status(401).send('Incorrect email or password');
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/logout', (req, res, next) => {
  req.session.destroy();
  res.status(204).end();
});

module.exports = router;
