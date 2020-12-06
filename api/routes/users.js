var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* GET all users */
/* only for development, maybe later for admins as well */
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.send(allUsers);
  } catch (err) {
    res.send('Error occured when trying to fetch all users: ' + err)
  }
});

/* POST create a new user entry */
router.post('/new-user', async (req, res) => {
  try {
    const newUser = new User({
      firebaseID: req.body.firebaseID,
      userType: 'reader',
      firstname: req.body.firstname,
      email: req.body.email,
      favoriteBooks: []
    });

    const doc = await newUser.save();

    console.log('New user saved!')
    res.send(doc);
  } catch (err) {
    console.log('Error when saving new user: ', err);
    res.send({message: 'error when saving a new user'});
  }
})

module.exports = router;