const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(express.json());


const cookieSession = require('cookie-session');
app.use(cookieSession({
    secure: false,
    signed: false
}));

app.use(cookieParser());

app.use("/public",express.static(path.join(__dirname, '/public')));


const authRouter = require('./router/authRouter.js');

app.use(authRouter);

const profileRouter = require('./router/profileRouter.js');

app.use(profileRouter);

const communityRouter = require("./router/communityRouter.js");
app.use(communityRouter);

// app.post("/test",re,(req,res) => {
//     console.log(req.cookies);
//     res.send(req.cookies);
// });


const mongodb = mongoose.connect("mongodb://127.0.0.1:27017", (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log("database connection is succesfull");
    }

});

const server = app.listen(port, () => {
    console.log(`server started at ${port}`)
})