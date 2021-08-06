import UserImg from './../images/userpic.png';
import {v1} from 'uuid';

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_MESSAGE_INPUT_TEXT = 'CHANGE-MESSAGE-INPUT-TEXT'

const postTime = new Date()
const deys = (postTime.getDay() < 10) ? (`0${postTime.getDay()}`) : (`${postTime.getDay()}`)
const month = (postTime.getMonth() < 10) ? (`0${postTime.getMonth()}`) : (`${postTime.getMonth()}`)
const time: string = `${deys}.${month} at ${postTime.getHours()}:${postTime.getMinutes()}`

export type DialogsDataPropsType = {
    id: string
    name: string
}
export type MessagesDataPropsType = {
    id: string
    name: string
    time: string
    message: string
    userPic: string
}
export type PostsDataPropsType = {
    id: string
    name: string
    time: string
    text: string
    userPic: string
    like: number
}

export type FriendsPropsType = {
    id: string
    name: string
    userPic: string
}

export type MessagesPagePropsType = {
    dialogsData: Array<DialogsDataPropsType>
    messagesData: Array<MessagesDataPropsType>
    messageInputText: string
}
export type ProfilePagePropsType = {
    postsData: Array<PostsDataPropsType>
    newPostText: string
}
export type GeneralPropsType = {
    friends: Array<FriendsPropsType>
}

export type RootStateTypes = {
    messagesPage: MessagesPagePropsType
    profilePage: ProfilePagePropsType
    general: GeneralPropsType
}

export type StorePropsType = {
    _state: RootStateTypes
    subscribe: (observer: (_state: RootStateTypes) => void) => void
    _callSubscriber: (_state: RootStateTypes) => void
    getState: () => RootStateTypes
    dispatch: (action: AtionCreatorType) => void
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const changePostTextActionCreator = (text: string) => ({type: CHANGE_POST_TEXT, text: text} as const)
export const sendMessageActionCreator = (messageText: string) => ({type: SEND_MESSAGE, messageText: messageText} as const)
export const changeMessageInputTextActionCreator = (messageInputText: string) => ({ type: CHANGE_MESSAGE_INPUT_TEXT, messageInputText: messageInputText} as const)

export type AtionCreatorType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof changePostTextActionCreator> | ReturnType<typeof sendMessageActionCreator> | ReturnType<typeof changeMessageInputTextActionCreator>

const store: StorePropsType = {
    _state: {
        messagesPage: {
            dialogsData: [
                {id: v1(), name: 'Sergej'},
                {id: v1(), name: 'Danik'},
                {id: v1(), name: 'Ivan'},
                {id: v1(), name: 'Anton'},
                {id: v1(), name: 'Dima'}
            ],
            messagesData: [
                {id: v1(), name: 'Sergej', time: '10:25', message: 'Hi!!!', userPic: UserImg,},
                {id: v1(), name: 'Eduard', time: '10:25', message: 'Hi!!!', userPic: UserImg,},
                {id: v1(), name: 'Sergej', time: '10:25', message: 'How are you', userPic: UserImg,},
                {id: v1(), name: 'Eduard', time: '10:25', message: 'Okey! You??', userPic: UserImg,},
            ],
            messageInputText: '',
        },
        profilePage: {
            postsData: [
                {
                    id: v1(),
                    name: 'Eduard Fedosevich',
                    time: '11:31',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    userPic: UserImg,
                    like: 10
                },
            ],
            newPostText: '',
        },
        general: {
            friends: [
                {id: v1(), name: 'Sergej', userPic: UserImg},
                {id: v1(), name: 'Danik', userPic: UserImg},
                {id: v1(), name: 'Anton', userPic: UserImg}
            ]
        }
    },
    _callSubscriber() {
        console.log('rerender')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        if (action.type === 'ADD-POST') {
            const newPost: PostsDataPropsType = {
                id: v1(),
                name: 'Eduard Fedosevich',
                time: time,
                text: this._state.profilePage.newPostText,
                userPic: UserImg,
                like: 0
            }
            this._state.profilePage.postsData.unshift(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }

        else if (action.type === 'CHANGE-POST-TEXT') {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        }

        else if (action.type === 'SEND-MESSAGE') {
            const newMassage: MessagesDataPropsType = {
                id: v1(),
                name: 'Eduard',
                time: time,
                message: action.messageText,
                userPic: UserImg,
            }
            this._state.messagesPage.messagesData.push(newMassage)
            this._state.messagesPage.messageInputText = ''
            this._callSubscriber(this._state)

        }

        else if (action.type === 'CHANGE-MESSAGE-INPUT-TEXT') {
            this._state.messagesPage.messageInputText = action.messageInputText
            this._callSubscriber(this._state)
        }
    }
}

export default store;
