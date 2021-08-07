import UserImg from './../images/userpic.png';
import {v1} from 'uuid';
import prosfileReducer, {addPostActionCreator, changePostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {changeMessageInputTextActionCreator, sendMessageActionCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_MESSAGE_INPUT_TEXT = 'CHANGE-MESSAGE-INPUT-TEXT'

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

export type AtionCreatorType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changePostTextActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof changeMessageInputTextActionCreator>

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
        this._state.profilePage = prosfileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.general = sidebarReducer(this._state.general, action)

        this._callSubscriber(this._state)
    }
}

export default store;
