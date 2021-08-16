import React from 'react';
import style from './Messages.module.css';
import generelContentStyle from './../Profile/Profile.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsDataPropsType, MessagesDataPropsType} from '../../Redux/store';


type MessagesPropsType = InputMessagePropsType & {
    dialogsData: Array<DialogsDataPropsType>
    messagesData: Array<MessagesDataPropsType>
}

type InputMessagePropsType = {
    onSendMessage: (textMessage: string) => void
    onChangeMessageText: (currentTextMessage: string) => void
    textMessages: string
}

const DialogItem = (props: DialogsDataPropsType) => {

    const path = `/messages/${props.id}`

    return (
        <div className={style.dialogsItem}>
            <NavLink to={path}>
                <div className={style.friendDialog}>
                    <img src={props.userPic} alt={'userPic'} className={style.userPic}/>
                    <span className={style.friendDialogName}>{props.name}</span>
                </div>
            </NavLink>
        </div>
    )
}

const Message = (props: MessagesDataPropsType) => {

    return (
        <div className={style.messagesItem}>
            <div className={style.messageUserPic}>
                <img src={props.userPic} alt={'userPic'} className={style.userPic}/>
                <div className={style.messageNameWrapper}>
                    <span className={style.messageUserName}>{props.name}</span>
                    <span className={style.messageTime}>{props.time}</span>
                </div>
            </div>
            <div className={style.mesagge}>{props.message}</div>
        </div>
    )
}

const InputMessage = (props: InputMessagePropsType) => {

    const sendMessage = () => {
        let textMessage = props.textMessages
        if (textMessage.trim() !== '') {
            props.onSendMessage(textMessage)
        }
    }

    const changeMessageText = (event: React.FormEvent<HTMLInputElement>) => {
        let currentTextMessage = event.currentTarget.value
        props.onChangeMessageText(currentTextMessage)
    }

    return (
        <div className={style.InputMessageContainer}>
            <label>
                <input  onChange={changeMessageText} value={props.textMessages} type="text" name="InputMessage" id="InputMessage"/>
                <button onClick={sendMessage}>send</button>
            </label>
        </div>
    )
}

export const Messages: React.FC<MessagesPropsType> = (props) => {

    const dialogs = props.dialogsData
        .map((d: DialogsDataPropsType) =>
             <DialogItem name={d.name} id={d.id} userPic={d.userPic}/>)

    const messages = props.messagesData
        .map((m: MessagesDataPropsType) =>
            <Message message={m.message} time={m.time} name={m.name} userPic={m.userPic} id={m.id}/>)

    return (
        <div className={generelContentStyle.section}>
            <div className={`${generelContentStyle.wrapper} ${style.wrapper}`}>
                <div className={style.dialogsList}>
                    {dialogs}
                </div>
                <div className={style.messagesList}>
                    {messages}
                    <InputMessage
                        onSendMessage={props.onSendMessage}
                        onChangeMessageText={props.onChangeMessageText}
                        textMessages={props.textMessages}/>
                </div>
            </div>
        </div>
    )
}