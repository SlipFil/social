import React from "react";
import s from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
  

  //мапим массив сообщений из диалогов в компоненту диалогов
  let dialogsElements = props.dialogPage.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} />
  ));
  
  let messagesElements = props.dialogPage.messagesData.map((m) => (
    <Message text={m.message} key={m.id} />
  ));
  let newMessageBody = props.dialogPage.newMessageBody;
  let onSendMessageClick = () => {
    props.onSendMessageClick();
  };
  let onNewMessageChange = (e) => {
    
    let body = e.target.value;
    props.onNewMessageChange(body);
  };
  //мапим массив сообщений из диалогов в компоненту сообщений

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsitems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          placeholder="Enter your text"
          onChange={onNewMessageChange}
          value={newMessageBody}
        ></textarea>
        <button onClick={onSendMessageClick}>Отправить</button>
      </div>
    </div>
  );
};
export default Messages;
