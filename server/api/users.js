const router = require('express').Router();
const { User, Task } = require('../db');

router.get('/:phongId', async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        phongId: req.params.phongId,
      },
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
