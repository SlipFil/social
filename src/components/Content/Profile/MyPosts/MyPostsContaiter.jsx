import React from "react";
import {
  addPostCreator,
  updateNewPostText,
} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


 

let mapStateToProps = (state) => { // Данные из стейта
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => { // Коллбэки
  return {
    updateNewPost: (text) => {
      dispatch(updateNewPostText(text))
    },
    addPost:  () => {
      dispatch(addPostCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
