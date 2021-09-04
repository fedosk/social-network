import {v1} from "uuid";
import UserImg from "../images/userpic.png";

const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_MESSAGE_INPUT_TEXT = 'CHANGE-MESSAGE-INPUT-TEXT'

export type DialogsDataPropsType = {
    id: string
    name: string
    userPic: string,
}

export type MessagesDataPropsType = {
    id: string
    name: string
    time: string
    message: string
    userPic: string
}

export type dialogsPropsType = {
    dialogsData: DialogsDataPropsType[]
    messagesData: MessagesDataPropsType[]
    messageInputText: string
}

const initialState: dialogsPropsType = {
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

const dialogsReducer = (state: dialogsPropsType = initialState, action: AtionCreatorType) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMassage: MessagesDataPropsType = {
                id: v1(),
                name: 'Eduard',
                time: new Date().toLocaleString(),
                message: state.messageInputText,
                userPic: UserImg,
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMassage],
                messageInputText: ''
            }
        }
        case CHANGE_MESSAGE_INPUT_TEXT: {
            return {
                ...state,
                messageInputText: action.messageInputText
            }
        }
        default:
            return state
    }
}

type AtionCreatorType = ReturnType<typeof onSendMessage> | ReturnType<typeof onChangeMessageText>

export const onSendMessage = () => ({
    type: SEND_MESSAGE
} as const)

export const onChangeMessageText = (messageInputText: string) => ({
    type: CHANGE_MESSAGE_INPUT_TEXT,
    messageInputText: messageInputText
} as const)


export default dialogsReducer