const router = require('express').Router();
const { Pet } = require('../../models');

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



//delete profile




module.exports = router