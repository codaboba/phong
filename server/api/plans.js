const router = require('express').Router();
const { User, Task, Plan } = require('../db');

router.get('/:phongId', async (req, res, next) => {
  try {
    const plans = await Plan.findAll({
      where: {
        phongId: req.params.phongId,
      },
    });
    res.json(plans);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
