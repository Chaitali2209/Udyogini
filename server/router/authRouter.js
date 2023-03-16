const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

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

module.exports = router;
