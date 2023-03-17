const RegisterModel = require("../models/RegisterModel.js");
const jwt = require("jsonwebtoken");

module.exports.updateProfile = async (req,res) => {
    let id = "6413171d1cdf45e5b981e4f2";
    // TODO Extract Id from cookie
    res.id = req.decodedToken.id;
    const retrivedData = await RegisterModel.findById(req.decodedToken.id);
    let business = {};
    let buyer = {}
    if(req.body.business){
        updateBusinessProfile(req.body.business, retrivedData ,res);
    }
    if(req.body.buyer){
        updateBuyerProfile(req.body.buyer,retrivedData ,res);
    }
}

const updateBusinessProfile = async (business, decodedToken,res) => {
    const params = ["organizationName","location","productName","minOrderValue","productRate","numberOfEmployee"];
    const data = decodedToken.business;
    for(key of params){
        if (business[key])
            data[key] = business[key];
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