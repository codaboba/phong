'use strict';

const db = require('./database');
const Phong = require('./models/phong');
const User = require('./models/user');
const Task = require('./models/task');
const Plan = require('./models/plan');

Phong.hasMany(User);
Phong.hasMany(Task);
Phong.hasMany(Plan);
User.belongsTo(Phong);
Task.belongsTo(Phong);
Plan.belongsTo(Phong);

Plan.hasMany(Task);
Task.belongsTo(Plan);

User.belongsToMany(Task, { through: 'user_task' });
Task.belongsToMany(User, { through: 'user_task' });

module.exports = { db, Phong, User, Task, Plan };
