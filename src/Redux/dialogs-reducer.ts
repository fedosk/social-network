import {v1} from "uuid";
import UserImg from "../images/userpic.png";
import {AtionCreatorType, MessagesDataPropsType, MessagesPagePropsType} from "./store";

const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_MESSAGE_INPUT_TEXT = 'CHANGE-MESSAGE-INPUT-TEXT'

const initialState:MessagesPagePropsType = {
    dialogsData: [
        {id: v1(), name: 'Sergej', userPic: UserImg,},
        {id: v1(), name: 'Danik', userPic: UserImg,},
        {id: v1(), name: 'Ivan', userPic: UserImg,},
        {id: v1(), name: 'Anton', userPic: UserImg,},
        {id: v1(), name: 'Dima', userPic: UserImg,}
    ],
    messagesData: [
        {id: v1(), name: 'Sergej', time: new Date().toLocaleString(), message: 'Hi!!!', userPic: UserImg,},
        {id: v1(), name: 'Eduard', time: new Date().toLocaleString(), message: 'Hi!!!', userPic: UserImg,},
        {id: v1(), name: 'Sergej', time: new Date().toLocaleString(), message: 'How are you', userPic: UserImg,},
        {id: v1(), name: 'Eduard', time: new Date().toLocaleString(), message: 'Okey! You??', userPic: UserImg,},
    ],
    messageInputText: '',
}

const dialogsReducer = (state: MessagesPagePropsType = initialState, action: AtionCreatorType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMassage: MessagesDataPropsType = {
                id: v1(),
                name: 'Eduard',
                time: new Date().toLocaleString(),
                message: action.messageText,
                userPic: UserImg,
            }
            state.messagesData.push(newMassage)
            state.messageInputText = ''
            return state
        case CHANGE_MESSAGE_INPUT_TEXT:
            state.messageInputText = action.messageInputText
            return state
        default:
            return state
    }
}

export const sendMessageActionCreator = (messageText: string) => ({
    type: SEND_MESSAGE,
    messageText: messageText
} as const)

export const changeMessageInputTextActionCreator = (messageInputText: string) => ({
    type: CHANGE_MESSAGE_INPUT_TEXT,
    messageInputText: messageInputText
} as const)


export default dialogsReducer