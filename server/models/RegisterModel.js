//import
const mongoose = require('mongoose');
//schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profilePicture: String,
  business: {
    organizationName: String,
    location: String,
    productName: String,
    minOrderValue: Number,
    productRate: Number,
    numberOfEmployee: Number,
    aboutUs: String,
    productImages: [],
  },
  buyer:{
    organizationName: String,
    location: String, 
    gstn: String,
  }
})

//model
const user = mongoose.model('registerUser', userSchema);
//export
module.exports = user;