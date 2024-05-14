require("../config/db");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: String,
  email: String,
  password: String,
 // there is no repassword in scheme becoz we do not need it in database
  gender: String,
  city: String,
  state: String,
  contact: String,
  address: String
})

const User = mongoose.model("user", UserSchema)

module.exports = User;