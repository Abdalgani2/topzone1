const mongoose = require("mongoose");


// create new user
const user = new mongoose.Schema({
  name: { type: String,required: true },
  country: { type: String ,required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", user);