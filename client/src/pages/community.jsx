import CommunityPostCard from "../components/CommunityPostCard";
import CommunityPostButton from "../components/CommunityPostButton";
import "./Community.css";
import { useState, useContext, useEffect } from "react";
import Popup from "reactjs-popup";
import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";
import { NavBar } from "../components/NavBar";
import CommunityPostsContext from "../context/CommunityPost/CommunityPostsContext";

const Community = (props) => {
  const currentUser = useContext(CurrentUserContext);
  console.warn(currentUser);
  // const [postArray, setPostArray] = useState([]);
  const { CommunityPostList, updateCommunityPostList } = useContext(
    CommunityPostsContext
  );

  useEffect(() => {
    const checkUser = async () => {
      const postsResponse = await fetch("http://localhost:8000/checkUser", {
        method: "POST",
        credentials: "include",
      });
      if (postsResponse.status === 200) {
        const resJson = await postsResponse.json();
        currentUser.setState(resJson);
      }
    };
    checkUser()
  },[]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsResponse = await fetch("http://localhost:8000/getAllPosts", {
        method: "GET",
        credentials: "include",
      });
      if (postsResponse.status === 200) {
        const resJson = await postsResponse.json();
        console.log(resJson);
        updateCommunityPostList(resJson);
        console.log("Post Array:", CommunityPostList);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="Community">
      <NavBar shadowNavbar={true} />

      <div className="communityContainer">          {currentUser.state ? (
            <CommunityPostButton
              ProfilePicture={currentUser.state.User.profilePicture}
            />
          ) : (
            <h4>Login To Post</h4>
          )}

        <div className="communityPostContainer">


          {CommunityPostList.map((post) => (
            <CommunityPostCard
              profileImage={post.profilePicture}
              username={post.Username}
              description={post.TextContent}
              postImage={post.ImageContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
