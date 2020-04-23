import React from "react";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "./../../../redux/messagesReducer";
import Messages from "./Messages";
import { connect } from "react-redux";


let mapStateToProps = (state) => { // Данные из стейта
  return {
    dialogPage: state.dialogPage
  }
}

let mapDispatchToProps = (dispatch) => { // Коллбэки
  return {
    // набор нового сообщения
    onNewMessageChange: (body) => {dispatch(updateNewMessageBodyCreator(body))},
    // отправка сообщения 
    onSendMessageClick: () => {dispatch(sendMessageCreator())}
    
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;
