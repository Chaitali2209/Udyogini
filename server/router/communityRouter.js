const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const multer = require("multer");
const path =  require("path");
const {createPost,getAllPosts} = require("../controller/communityPostController");

const router = express.Router();


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/community')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname) )
    }
  })
const communityUpload = multer({ storage: storage })

router.post("/createPost", [requireAuth,communityUpload.single("ImageContent")], createPost);
router.get("/getAllPosts",getAllPosts);

module.exports =  router;