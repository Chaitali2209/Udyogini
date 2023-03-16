const RegisterModel = require("../models/RegisterModel.js");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
    // console.log(req);
    const name = req.body.name;
    const emailId = req.body.email;
    const password = req.body.password;

    try {
        if(emailId.length < 5){
            throw new Error("Please enter a valid email");
        }
        if(password.length < 6){
            throw new Error("Please enter a valid password");
        }
        const profilePicture = req.file ? `${req.protocol}://${req.get('host')}/${req.file.path}` : "";
        console.log(req.file);
        const user = await RegisterModel.create({
            name: name,
            email: emailId,
            password: password,
            business: {},
            buyer:{},
            profilePicture
        });



        const userData = {id: user.id, email: user.email, name: user.name, business: user.business, buyer: user.buyer,profilePicture};

        // Generate JWT
        const userJwt = jwt.sign(userData,process.env.secret);
        console.log(userJwt);

        // Send jwt as a cookie
        req.session.jwt = userJwt;
        
        // Send userdata as response
        res.send(userData);
    } catch (error) {
        console.log(error.message);
        res.status(400).send({ error: error.message })
    }
}


module.exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const checkUser = await RegisterModel.findOne({email, password});

    if(checkUser){
        console.log("Logged in", checkUser);
        const userData = {id: checkUser.id, email: checkUser.email, name: checkUser.name,business: checkUser.business, buyer: checkUser.buyer};

        // Generate JWT
        const userJwt = jwt.sign(userData,process.env.secret);
        console.log(userJwt);

        // Send jwt as a cookie
        req.session.jwt = userJwt;

        res.status(200).send(userData);
    }else{
        console.log("Invalid email or password");
        res.status(400).send({error: "Invalid email or passwod"});
    }
}


module.exports.signout = (req, res) => {
    req.session = null;
    res.redirect("/signInPage");
}