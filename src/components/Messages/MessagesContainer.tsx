import React from 'react';
import {StorePropsType} from '../../Redux/store';
import {changeMessageInputTextActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import {Messages} from "./Messages";


type MessagesPropsType = {
    store: StorePropsType
}

export const MessagesContainer: React.FC<MessagesPropsType> = ({store}) => {

    const onSendMessage = () => {
        store.dispatch(sendMessageActionCreator())
    }

    const onChangeMessageText = (currentTextMessage: string) => {
        store.dispatch(changeMessageInputTextActionCreator(currentTextMessage))
    }


    return (
        <Messages onSendMessage={onSendMessage}
                  onChangeMessageText={onChangeMessageText}
                  textMessages = {store.getState().messagesPage.messageInputText}
                  dialogsData={store.getState().messagesPage.dialogsData}
                  messagesData={store.getState().messagesPage.messagesData}/>
    )
}