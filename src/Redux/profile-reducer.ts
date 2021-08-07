import {v1} from "uuid";
import UserImg from "../images/userpic.png";
import {AtionCreatorType, PostsDataPropsType, ProfilePagePropsType} from "./state";

const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'

const postTime = new Date()
const deys = (postTime.getDay() < 10) ? (`0${postTime.getDay()}`) : (`${postTime.getDay()}`)
const month = (postTime.getMonth() < 10) ? (`0${postTime.getMonth()}`) : (`${postTime.getMonth()}`)
const time: string = `${deys}.${month} at ${postTime.getHours()}:${postTime.getMinutes()}`

const prosfileReducer = (state:ProfilePagePropsType, action:AtionCreatorType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataPropsType = {
                id: v1(),
                name: 'Eduard Fedosevich',
                time: time,
                text: state.newPostText,
                userPic: UserImg,
                like: 0
            }
            state.postsData.unshift(newPost);
            state.newPostText = ''
            return state
        case CHANGE_POST_TEXT:
            state.newPostText = action.text
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const changePostTextActionCreator = (text: string) => ({type: CHANGE_POST_TEXT, text: text} as const)


export default prosfileReducer