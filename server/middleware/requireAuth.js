
const jwt = require("jsonwebtoken")
// import RegisterModel from "../models/RegisterModel.js";

const requireAuth = (req, res, next) => {
    let cookie = Buffer.from(req.cookies.session,"base64");
    cookie = JSON.parse( cookie.toString('utf-8'));
    console.log(cookie.jwt)
    // console.log(cookie);

    const token = cookie.jwt;
    if(token){
        jwt.verify(token, process.env.secret, (err,decodedToken) => {
            if(err){
                console.log(err.message);
                res.status(403).json({error:"token is not valid"});
            }else{
                console.log("Decoded token ",decodedToken);
                req.decodedToken = decodedToken;
                next();
            }

        });
    }else{
        console.log(req.cookies);
        res.status(403).json({error:"not logged in"});
    }
}


module.exports = requireAuth;