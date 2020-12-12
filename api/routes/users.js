const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

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
    const newUser = new Users({
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
    res.status(400);
    res.send({message: 'error when saving a new user'});
  }
});

/* GET all user data based on ID */
router.get('/:userID', async (req, res) => {
  try {
    const userID = req.params.userID;
    const foundUser = await Users.findOne({ firebaseID: userID });

    console.log('found user', foundUser);
    res.send(foundUser);
  } catch (err) {
    console.log('error trying to fetch user data: ' + err);
    res.send({message: 'error when fetching user data'});
  }
});

/* GET user's favorite books */
router.get('/:userID/favbooks', async (req, res) => {
  try {
    const userID = req.params.userID;
    const foundUser = await Users.findOne({ firebaseID: userID });

    console.log('found user fav books', foundUser.favoriteBooks);
    res.send(foundUser.favoriteBooks);
  } catch (err) {
    console.log('error trying to fetch user fav books: ' + err);
    res.send({message: 'error when fetching user fav books'});
  }
});

/* PATCH save new book ID to a user's favorite book's */
router.patch('/:userID/favbooks', async (req, res) => {
  try {
    const userID = req.params.userID;
    const newBook = req.body.newFavBook;
    const foundUser = await Users.findOne({ firebaseID: userID });
    console.log('foundUser', foundUser)
    foundUser.favoriteBooks.push(newBook);

    const updatedUser = await Users.findOneAndUpdate(
      // filter
      { firebaseID: userID },
      // update
      { favoriteBooks: foundUser.favoriteBooks },
      // return the updated user entry (by dafault returns the old one)
      { new: true }
    );

    console.log(updatedUser);
    res.send(updatedUser);
  } catch (err) {
    console.log('error trying to add new fav book: ' + err);
    res.send({message: 'error when adding new favorite book'});
  }
});

/* DELETE a book from user's favorites */
router.delete('/:userID/favbooks', async (req, res) => {
  try {
    const userID = req.params.userID;
    const bookToBeDeleted = req.body.bookToBeDeleted;
    const foundUser = await Users.findOne({ firebaseID: userID });
    console.log('foundUser', foundUser)

    const favs = foundUser.favoriteBooks;
    const indexOfBook = favs.indexOf(bookToBeDeleted);
    if (indexOfBook > -1) {
      favs.splice(indexOfBook, 1);
    }

    const updatedUser = await Users.findOneAndUpdate(
      // filter
      { firebaseID: userID },
      // update
      { favoriteBooks: favs },
      // return the updated user entry (by dafault returns the old one)
      { new: true }
    );

    console.log(updatedUser);
    res.send(updatedUser);
  } catch (err) {
    console.log('error trying to delete a fav book: ' + err);
    res.send({message: 'error when deleting a favorite book'});
  }
});

module.exports = router;