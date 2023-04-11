import React, { useState } from "react";
import { Avatar } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./css/Feed.css";
import Post from "./Post";

function Feed() {
  const [input, setInput] = useState();
  const [post, setPost] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("name"));

  const submitPost = (e) => {
    e.preventDefault();
    setPost([input, ...post]);

    alert("submit");

    setInput(" ");
  };

  return (
    <div className="feed">
      <div className="feed_input">
        <div className="feed_form">
          <Avatar src="https://th.bing.com/th/id/OIP.qi6nL__HUnvmOoONWaQRywHaHa?pid=ImgDet&rs=1" />
          <form onSubmit={submitPost}>
            <input
              type="text"
              placeholder="Start a post"
              onChange={(e) => setInput(e.target.value)}
            />

            <input type="submit" />
          </form>
        </div>
        <div className="feed_options">
          <div className="option">
            <PhotoIcon style={{ color: "#70b5f9" }} />
            <span>Photo</span>
          </div>

          <div className="option">
            <YouTubeIcon style={{ color: "#7fc15e" }} />
            <span>Video</span>
          </div>

          <div className="option">
            <TodayIcon style={{ color: "#e7a33e" }} />
            <span>Event</span>

            <div className="option">
              <AssignmentIcon style={{ color: "#fc9295" }} />
              <span>Write Artical</span>
            </div>
          </div>
        </div>
      </div>

      {post.map((item) => (
        <Post
        
          name={user}
          message={item}
          photoURL="https://www.google.com/imgres?imgurl=https%3A%2F%2Ftechtrickseo.com%2Fwp-content%2Fuploads%2F2019%2F11%2FasfDFHJDKFHDFJH.jpg&imgrefurl=https%3A%2F%2Ftechtrickseo.com%2Fgirls-stylish-profile-pics-dp-whatsapp-facebook-instagram%2F&tbnid=bRyF8RKYhbl-zM&vet=12ahUKEwij-8f2haL9AhXlitgFHaDxArAQMyg-egQIARB9..i&docid=k-ZjNMf5sYSHrM&w=469&h=595&q=image%20profile%20pic%20girl&ved=2ahUKEwij-8f2haL9AhXlitgFHaDxArAQMyg-egQIARB9"
        />
      ))}
      <Post
        name="Rutvik Pranami"
        message="we are learning react js"
        photoURL="https://www.google.com/imgres?imgurl=https%3A%2F%2Ftechtrickseo.com%2Fwp-content%2Fuploads%2F2019%2F11%2FasfDFHJDKFHDFJH.jpg&imgrefurl=https%3A%2F%2Ftechtrickseo.com%2Fgirls-stylish-profile-pics-dp-whatsapp-facebook-instagram%2F&tbnid=bRyF8RKYhbl-zM&vet=12ahUKEwij-8f2haL9AhXlitgFHaDxArAQMyg-egQIARB9..i&docid=k-ZjNMf5sYSHrM&w=469&h=595&q=image%20profile%20pic%20girl&ved=2ahUKEwij-8f2haL9AhXlitgFHaDxArAQMyg-egQIARB9"
      />
    </div>
  );
}

export default Feed;
