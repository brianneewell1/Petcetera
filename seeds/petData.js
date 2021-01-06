const { Pet } = require('../models');

const petdata = [
  {
    id: 1,
    petname: 'Bingo',
    nickname: 'Bingo',
    species: 'Dog',
    breed: 'Border Collie',
    age: 5,
    microchipId: '566789',
  },
  {
    id: 2,
    petname: 'Casey',
    nickname: 'Casey',
    species: 'Dog',
    breed: 'Poodle',
    age: 3,
    microchipId: '456567',
  },
  {
    id: 3,
    petname: 'Panda',
    nickname: 'Panda',
    species: 'Cat',
    breed: 'Siamese',
    age: 12,
    microchipId: '999880',
  },
  {
    id: 4,
    petname: 'Rocko',
    nickname: 'R',
    species: 'bird',
    breed: 'Cocka,too',
    age: 35,
    microchipId: '9998837',
  },
];

const seedPet = () => Pet.bulkCreate(petdata);

module.exports = seedPet;
