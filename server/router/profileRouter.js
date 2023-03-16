const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');
const requireAuth = require('../middleware/requireAuth');

// router.get('/demo', (req, res) =>{
//     res.send("hello from profile router");
// } )


router.post('/updateProfile',requireAuth ,profileController.updateProfile);

module.exports = router;
