const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
      { id: 1, post: "My first post", likesCount: 2 },
      { id: 2, post: "Post 2", likesCount: 0 },
      { id: 3, post: "Post 3", likesCount: 0 },
      { id: 4, post: "Post 4", likesCount: 0 },
    ],
    newPostText: "Enter your text",
    profile: null,
  }

const profileReducer= (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0,
              };
              return {...state,
              posts: [...state.posts, newPost], 
              newPostText:''}};
             
        case UPDATE_NEW_POST_TEXT: {
          return {...state,
          newPostText: action.newText};
          }
        case SET_USER_PROFILE: {
          return {...state,
          profile: action.profile};
          }
        default: 
        return state;
    }
   }

export const addPostCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;