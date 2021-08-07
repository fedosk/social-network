import {v1} from "uuid";
import UserImg from "../images/userpic.png";
import {AtionCreatorType, MessagesDataPropsType, MessagesPagePropsType} from "./state";

const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_MESSAGE_INPUT_TEXT = 'CHANGE-MESSAGE-INPUT-TEXT'

const messageTime = new Date()
const deys = (messageTime.getDay() < 10) ? (`0${messageTime.getDay()}`) : (`${messageTime.getDay()}`)
const month = (messageTime.getMonth() < 10) ? (`0${messageTime.getMonth()}`) : (`${messageTime.getMonth()}`)
const time: string = `${deys}.${month} at ${messageTime.getHours()}:${messageTime.getMinutes()}`

const dialogsReducer = (state: MessagesPagePropsType, action: AtionCreatorType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMassage: MessagesDataPropsType = {
                id: v1(),
                name: 'Eduard',
                time: time,
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