

const router = require('express').Router();
const { Pet } = require('../../models');
//const { response } = require('express');

router.get('/pet', (req, res) => {
  console.log('PET ROUTE FORM');
  res.render('petForm');
});

//create pet profile
router.post('/', async (req,res) => {
    try {
        console.log(req.body)
        const petData = await Pet.create({...req.body, user_id:req.session.user_id});
//res.json(petData)
res.render(petForm, {pet:petData})
    } catch (err) {
        res.json(err);
    }
    
})

//update profile
router.put('/', async (req,res) => {
    try {
        console.log(req.body)
        const petData = await Pet.create({...req.body, user_id:req.session.user_id});
//res.json(petData)
res.render(petForm, {pet:petData})
    } catch (err) {
        res.json(err);
    }
    
})




//delete profile

router.delete('/:id', async (req, res) => {
    try {
      const petData = await Pet.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!petData) {
        res.status(404).json({ message: 'No pet found with this id!' });
        return;
      }
  
      res.status(200).json(petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });





module.exports = router

