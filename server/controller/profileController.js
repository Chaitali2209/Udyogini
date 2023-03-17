const RegisterModel = require("../models/RegisterModel.js");
const jwt = require("jsonwebtoken");

module.exports.updateProfile = async (req,res) => {
    // console.log(req.files);

    res.id = req.decodedToken.id;
    const retrivedData = await RegisterModel.findById(req.decodedToken.id);
    let business = {};
    let buyer = {}
    req.body.business = JSON.parse(req.body.business).business;
    const productImages = []
    for(key in req.files){
        console.log(req.files[key][0] ? `${req.protocol}://${req.get('host')}/${req.files[key][0].path}` : "");
        productImages.push(req.files[key][0] ? `${req.protocol}://${req.get('host')}/${req.files[key][0].path}` : ""); 
        // console.log(req.files[key][0].path)
    }
    req.body.business.productImages = productImages;
    // req.body.buyer = JSON.parse(req.body.buyer).buyer;

    if(req.body.business){
        updateBusinessProfile(req.body.business, retrivedData ,res);
    }
    // if(req.body.buyer){
    //     updateBuyerProfile(req.body.buyer,retrivedData ,res);
    // }
}

const updateBusinessProfile = async (business, decodedToken,res) => {
    const params = ["organizationName","location","productName","minOrderValue","productRate","numberOfEmployee","productImages"];
    const data = decodedToken.business;
    for(key of params){
        if (business[key])
            data[key] = business[key];
        console.log(key, business[key])
    }
    await RegisterModel.updateOne({_id: res.id},{business: data});
    res.send(data);
}

const updateBuyerProfile = async (buyer, decodedToken, res) => {
    const params = ["organizationName","location","gstn"];
    const data = decodedToken.buyer;
    for(key of params){
        if (buyer[key])
            data[key] = buyer[key];
    }
    await RegisterModel.updateOne({_id: res.id},{buyer: data});
    res.send(data);

}