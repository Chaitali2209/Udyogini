const mongoose = require("mongoose");
const CommunityPostSchema = mongoose.Schema({
    UserID:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    TextContent:{
        type: String,
        required: true
    },
    ImageContent:{
        type: String
    },
    PostDate:{
        type: Date,
        required: true
    },
});

module.exports =  mongoose.model("CommunityPost",CommunityPostSchema);
