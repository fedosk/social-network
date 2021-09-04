
import {v1} from "uuid";
import UserImg from "../images/userpic.png";

export type FriendsPropsType = {
    id: string
    name: string
    userPic: string
}

export type sideBarPropsType = {
    friends: FriendsPropsType[]
}


const initialState:sideBarPropsType = {
    friends: [
        {id: v1(), name: 'Sergej', userPic: UserImg},
        {id: v1(), name: 'Danik', userPic: UserImg},
        {id: v1(), name: 'Anton', userPic: UserImg}
    ],
}

const sidebarReducer = (state: sideBarPropsType = initialState) => {
    return state
}

export default sidebarReducer