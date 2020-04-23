import messagesReducer from './messagesReducer'
import profileReducer from './profileReducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "My first post", likesCount: 2 },
        { id: 2, post: "Post 2", likesCount: 0 },
        { id: 3, post: "Post 3", likesCount: 0 },
        { id: 4, post: "Post 4", likesCount: 0 },
      ],
      newPostText: "enter your text",
    },
    dialogPage: {
      dialogsData: [
        { id: 1, name: "Oleg" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Misha" },
        { id: 4, name: "Zhenya" },
        { id: 5, name: "Lesha" },
        { id: 6, name: "Anna" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Lol" },
        { id: 4, message: "I don't know" },
        { id: 3, message: "How are you?" },
      ],
      newMessageBody:''
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
     this._state.profilePage = profileReducer(this._state.profilePage, action);
     this._state.dialogPage = messagesReducer(this._state.dialogPage, action);
     this._callSubscriber(this._state);
    
  },
};


export default store;
window.store = store;
