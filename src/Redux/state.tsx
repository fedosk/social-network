import UserImg from './../images/userpic.png';
import {v1} from 'uuid';

let rerenderEntireTree = (state: RootStateTypes) => {

}

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

const state: RootStateTypes = {
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
        newPostText: ''
    },
    general: {
        friends: [
            {id: v1(), name: 'Sergej', userPic: UserImg},
            {id: v1(), name: 'Danik', userPic: UserImg},
            {id: v1(), name: 'Anton', userPic: UserImg}
        ]
    }
}


export const addPost = (time: string) => {
    const newPost = {
        id: v1(),
        name: 'Eduard Fedosevich',
        time: time,
        text: state.profilePage.newPostText,
        userPic: UserImg,
        like: 0
    }
    state.profilePage.postsData.unshift(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const changeNeWPostText = (text: string) => {
    state.profilePage.newPostText = text
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: RootStateTypes) => void) => {
    rerenderEntireTree = observer
}



export default state;