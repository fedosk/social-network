import React from 'react';
import {AtionCreatorType, RootStateTypes} from '../../Redux/store';
import {changeMessageInputTextActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state: RootStateTypes) => {
    return {
        textMessages: state.messagesPage.messageInputText,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
    }
}

let mapDispatchToProps = (dispatch: (action: AtionCreatorType) => void) => {
    return {
        onSendMessage: () => {dispatch(sendMessageActionCreator())},
        onChangeMessageText: (currentTextMessage: string) =>{dispatch(changeMessageInputTextActionCreator(currentTextMessage))},
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer