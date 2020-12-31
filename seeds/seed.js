const sequelize = require('../config/connection');
const seedPet = require('./petData');
const seedOwner = require('./ownerData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPet();

  await seedOwner();

  process.exit(0);
};

seedAll();
