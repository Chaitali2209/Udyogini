const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const RegisterModel = require("../models/RegisterModel");
const requireAuth = require("../middleware/requireAuth");

const multer = require("multer");
const path =  require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/profilePictures");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const profileUpload = multer({ storage: storage });

router.post("/register", profileUpload.single("profilePicture") ,authController.register);
router.post("/login", authController.login);
router.post("/checkUser",requireAuth,authController.checkUser);
router.post("/test",profileUpload.fields([
  {name: "productImage1", maxCount: 1},
  {name: "productImage2", maxCount: 1},
  {name: "productImage3", maxCount: 1}

]),async (req,res)=>{
  console.log(req.files);
  res.send(req.files);
})

module.exports = router;
