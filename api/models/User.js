const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firebaseID: { type: String, required: true, unique: true },
    userType: String,
    firstname: String,
    email: String,
    favoriteBooks: [String],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;