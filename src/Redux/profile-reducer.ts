import {v1} from "uuid";
import UserImg from "../images/userpic.png";
import {AtionCreatorType, PostsDataPropsType, ProfilePagePropsType} from "./store";

const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'

const initiolState: ProfilePagePropsType = {
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
    newPostText: '',
}

const prosfileReducer = (state: ProfilePagePropsType = initiolState, action: AtionCreatorType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsDataPropsType = {
                id: v1(),
                name: 'Eduard Fedosevich',
                time: new Date().toLocaleString(),
                text: state.newPostText,
                userPic: UserImg,
                like: 0
            }
            return {...state, postsData: [newPost, ...state.postsData], newPostText: ''}
        }
        case CHANGE_POST_TEXT: {
            return {...state, newPostText: action.text}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const changePostTextActionCreator = (text: string) => ({type: CHANGE_POST_TEXT, text: text} as const)

export default prosfileReducer