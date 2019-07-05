const { db, Phong, User, Task, Plan } = require('./server/db');
const { green, red } = require('chalk');
const Chance = require('chance');
const chance = new Chance();

const phongs = () => {
  const data = [];
  for (let i = 0; i < 3; i++) {
    data.push({
      name: chance.animal(),
      description: chance.sentence(),
      city: chance.city(),
    });
  }
  return data;
};

const users = () => {
  const data = [];
  for (let i = 0; i < 8; i++) {
    data.push({
      name: chance.name(),
      isAdmin: chance.bool({ likelihood: 10 }),
      email: chance.email({ domain: 'email.com' }),
      phoneNumber: chance.phone({ formatted: false }),
      about: chance.sentence(),
      phongId: chance.integer({ min: 1, max: 3 }),
      password: chance.integer({ min: 100, max: 300 }),
    });
  }
  return data;
};

const tasks = () => {
  const data = [];
  for (let i = 0; i < 40; i++) {
    data.push({
      name: chance.word(),
      details: chance.sentence({ words: 4 }),
      completed: chance.bool({ likelihood: 30 }),
      phongId: chance.integer({ min: 1, max: 3 }),
    });
  }
  for (let i = 0; i < 30; i++) {
    data.push({
      name: chance.word(),
      details: chance.sentence({ words: 4 }),
      completed: chance.bool({ likelihood: 30 }),
      planId: chance.integer({ min: 1, max: 3 }),
    });
  }
  return data;
};

const plans = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      name: chance.word(),
      phongId: chance.integer({ min: 1, max: 3 }),
    });
  }
  return data;
};

const seed = async () => {
  console.log('Syncing db...');
  await db.sync({ force: true });

  console.log('Seeding database...');
  await Promise.all(
    phongs().map(phong => {
      return Phong.create(phong);
    })
  );

  await Promise.all(
    users().map(user => {
      return User.create(user);
    })
  );

  await Promise.all(
    plans().map(plan => {
      return Plan.create(plan);
    })
  );

  await Promise.all(
    tasks().map(async task => {
      const res = await Task.create(task);
      await res.setUsers(chance.integer({ min: 1, max: 8 }));
      return res;
    })
  );

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
