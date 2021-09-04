import React from 'react';
import {onChangeMessageText, onSendMessage} from "../../Redux/dialogs-reducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";

let mapStateToProps = (state: RootState) => {
    return {
        textMessages: state.messagesPage.messageInputText,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
    }
}

const MessagesContainer = connect(mapStateToProps, {onSendMessage, onChangeMessageText})(Messages)

export default MessagesContainer