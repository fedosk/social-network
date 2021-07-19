import React from 'react';
import style from './Messages.module.css';
import generelContentStyle from './../Profile/Profile.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsDataPropsType, MessagesDataPropsType, MessagesPagePropsType} from '../../Redux/state';

type MessagesPropsType = {
    state: MessagesPagePropsType
}

const DialogItem = (props: DialogsDataPropsType) => {
    const path = `/messages/${props.id}`

    return (
        <div className={style.dialogsItem}>
            <NavLink to={path}>{props.name}</NavLink>
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

export const Messages: React.FC<MessagesPropsType> = (props) => {

    const dialogs = props.state.dialogsData
        .map((d: DialogsDataPropsType) =>
            <DialogItem name={d.name} id={d.id}/>)

    const messages = props.state.messagesData
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
                </div>
            </div>
        </div>
    )
}