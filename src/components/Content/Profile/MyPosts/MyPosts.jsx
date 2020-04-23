import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  

  let postElement = props.posts.map((p) => (
    <Post text={p.post} likesCount={p.likesCount} key={p.id}/>
  ));

  let onAddPost = () => {
    props.addPost()
      };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPost(text);
    
  };

  return (
    <div>
      My posts
      <div>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
        />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div>{postElement}</div>
    </div>
  );
};
export default MyPosts;
