const router = require('express').Router();
const { Pet } = require('../../models');
//const { response } = require('express');

router.get('/pet', (req, res) => {
  console.log('PET ROUTE FORM');
  res.render('petForm');
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    if (req.body) {
      const dbPetData = await Pet.create({
        petname: req.body.petname,
        nickname: req.body.nickname,
        species: req.body.species,
        breed: req.body.breed,
        birthdate: req.body.birthdate,
        microchip: req.body.microchip,
      });
    }
    console.log(req.body.petname);
    req.session.save(() => {
      req.session.user_id = dbPetData.id;
      // req.session.loggedIn = true;

      res.status(200).json(dbPetData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//create pet profile
// router.post('/', async (req, res) => {
//   try {
//     console.log(req.body);
//     const petData = await Pet.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });
//     //res.json(petData)
//     res.render(petForm, { pet: petData });
//   } catch (err) {
//     res.json(err);
//   }
// });

//update profile

//delete profile

module.exports = router;
