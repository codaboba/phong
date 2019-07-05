const router = require('express').Router();
const { User, Task } = require('../db');

router.get('/:phongId', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      where: {
        phongId: req.params.phongId,
      },
    });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
