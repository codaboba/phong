const router = require('express').Router();
const Phong = require('../db/models/phong');
const User = require('../db/models/user');
const Task = require('../db/models/task');
const Plan = require('../db/models/plan');

router.get('/:phongId', async (req, res, next) => {
  try {
    const phong = await Phong.findOne({
      where: {
        id: req.params.phongId,
      },
    });
    res.json(phong);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const phong = await Phong.create(req.body);
    res.status(201).json(phong);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
