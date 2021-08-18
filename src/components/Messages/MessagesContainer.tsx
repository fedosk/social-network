import React from 'react';
import {changeMessageInputTextActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../Redux/redux-store";

let mapStateToProps = (state: RootState) => {
    return {
        textMessages: state.messagesPage.messageInputText,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
    }
}

let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        onChangeMessageText: (currentTextMessage: string) => {
            dispatch(changeMessageInputTextActionCreator(currentTextMessage))
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer