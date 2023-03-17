import { React, useState } from "react";
import "./CommunityPostCard.css";

const CommunityPostCard = (props) => {
  return (
    <div className="communitypostcard">
    <div className="PostCard">
      <div className="CardHeader">
        <img className="profilePic" src={props.profileImage} alt="" />

        <h3 className="username">{props.username}</h3>
      </div>
      <div className="PostContent">
        <div className="PostDecription" src="">
          {props.description}
        </div>

        {props.postImage ? (
          <img className="PostImage" alt="" src={props.postImage} />
        ) : null}
      </div>
    </div>
    </div>
  );
};

export default CommunityPostCard;
