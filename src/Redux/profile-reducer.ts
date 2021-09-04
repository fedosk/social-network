import {v1} from "uuid";
import UserImg from "../images/userpic.png";

const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
const SET_USER_INFO = 'SET_USER_INFO'



export type UserInfoPropsType = {
    aboutMe: string | null
    contacts: {
        skype: string | null
        vk: string | null
        facebook: string | null
        icq: string | null
        email: string | null
        googlePlus: string | null
        twitter: string | null
        instagram: string | null
        whatsApp: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}

export type PostsDataPropsType = {
    id: string
    name: string
    time: string
    text: string
    userPic: string
    like: number
}

export type ProfilePropsType = {
    userInfo: UserInfoPropsType
    postsData: Array<PostsDataPropsType>
    postText: string
}

const initialState: ProfilePropsType = {
    userInfo: {
        aboutMe: "I'm good dev",
        contacts: {
            skype: 'skype',
            vk: 'vk',
            facebook: 'facebook',
            icq: null,
            email: 'email',
            googlePlus: null,
            twitter: 'twitter',
            instagram: 'instagram',
            whatsApp: null,
        },
        lookingForAJob: true,
        lookingForAJobDescription: "Looking for a job!",
        fullName: 'Eduard Fedosevich',
        userId: 1,
        photos: {
            small: null,
            large: null,
        }
    },
    postsData: [
        {
            id: v1(),
            name: 'Eduard Fedosevich',
            time: new Date().toLocaleString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            userPic: UserImg,
            like: 10
        },
    ],
    postText: '',
}

const profileReducer = (state: ProfilePropsType = initialState, action: AtionCreatorType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsDataPropsType = {
                id: v1(),
                name: 'Eduard Fedosevich',
                time: new Date().toLocaleString(),
                text: state.postText,
                userPic: UserImg,
                like: 0
            }
            return {...state, postsData: [newPost, ...state.postsData], postText: ''}
        }
        case CHANGE_POST_TEXT: {
            return {...state, postText: action.text}
        }
        case SET_USER_INFO: {
            return {...state, userInfo: action.userInfo}
        }
        default:
            return state
    }
}

export type AtionCreatorType = ReturnType<typeof addPost>
    | ReturnType<typeof changePostText>
    | ReturnType<typeof setUserInfo>

export const addPost = () => ({type: ADD_POST} as const)
export const changePostText = (text: string) => ({type: CHANGE_POST_TEXT, text} as const)
export const setUserInfo = (userInfo: UserInfoPropsType) => ({type: SET_USER_INFO, userInfo} as const)

export default profileReducer