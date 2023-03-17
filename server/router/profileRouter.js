const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');
const requireAuth = require('../middleware/requireAuth');
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/productImages");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const productImageUpload = multer({ storage: storage });


router.post('/updateProfile',requireAuth,productImageUpload.fields([
    {name: "productImage1", maxCount: 1},
    {name: "productImage2", maxCount: 1},
    {name: "productImage3", maxCount: 1}
  
  ]) ,profileController.updateProfile);

module.exports = router;
