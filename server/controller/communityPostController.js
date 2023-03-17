const CommunityPostModel = require("../models/CommunityPostModel");
const RegisterModel = require("../models/RegisterModel");

module.exports.createPost = async (req,res) => {
    try {
        const {UserID, TextContent, PostDate} = req.body;
        const ImageContent = req.file ? `${req.protocol}://${req.get('host')}/${req.file.path}` : "";
        const Post = await CommunityPostModel.create({UserID, TextContent, PostDate, ImageContent});
        console.log(req.body)

        console.log({UserID, TextContent, PostDate, ImageContent})
        if(Post){
            res.status(200).json(Post);
        }else{
            throw Error("Error occured while posting");
        }
    } catch (error) {
        res.status(403).json(error);
        console.log(error);
    }
}

module.exports.getAllPosts = async (req,res) => {
    try {
        const Posts = await CommunityPostModel.find();
        const newPosts = [];
        for(let i=0;i<Posts.length;i++){
            console.log(Posts[0].UserID);
            const User = await RegisterModel.findById(Posts[i].UserID);
            console.log(User);
            Posts[i]._doc["Username"] = User.name;
            Posts[i]._doc["profilePicture"] = User.profilePicture;
            newPosts.push(Posts[i]._doc);
        }
        console.log(newPosts);

        res.status(200).json(newPosts.reverse());
    } catch (error) {
        res.status(403).json(error);
        console.log(error)
    } 
}