import React, { useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AuthContext } from "../context/auth";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

function Post({ postData, userData }) {
  const { user } = useContext(AuthContext);
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (postData.likes.includes(user.uid)) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [postData]);

  const handleLike = async () => {
    if (!like) {
      await updateDoc(doc(db, "posts", postData.postId), {
        likes: arrayUnion(user.uid),
      });
    } else {
      await updateDoc(doc(db, "posts", postData.postId), {
        likes: arrayRemove(user.uid),
      });
    }
  };

  return (
    <div className="post-container">
      <video src={postData.postUrl} />
      <div className="videos-info">
        <div className="avatar_container">
          <Avatar
            alt="Remy Sharp"
            src={postData.profileUrl}
            sx={{ margin: "0.5rem" }}
          />
          <p style={{ color: "white", fontWeight: "bold" }}>
            {postData.profileName}
          </p>
        </div>
        <div className="post-like" onClick={() => handleLike}>
          {like ? (
            <FavoriteIcon fontSize="large" style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon fontSize="large" style={{ color: "white" }} />
          )}

          {postData.likes.length > 0 && postData.likes.length}
        </div>
      </div>
    </div>
  );
}

export default Post;
