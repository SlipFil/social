const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
      { id: 3, message: "I don't know" },
      { id: 4, message: "How are you?" },
    ],
    newMessageBody:''
  }

const messagesReducer= (state = initialState, action) => { 
  
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:{
          return {...state,
            newMessageBody: action.body}
            }
        case SEND_MESSAGE:{
          let body = state.newMessageBody;
          return  {...state,
            newMessageBody: '',
            messagesData: [...state.messagesData, {id: 4, message: body }]}
          } 
        default: return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

export default messagesReducer;