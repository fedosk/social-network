import {AtionCreatorType, GeneralPropsType, MessagesPagePropsType} from "./store";
import {v1} from "uuid";
import UserImg from "../images/userpic.png";

const initialState:GeneralPropsType = {
    friends: [
        {id: v1(), name: 'Sergej', userPic: UserImg},
        {id: v1(), name: 'Danik', userPic: UserImg},
        {id: v1(), name: 'Anton', userPic: UserImg}
    ],
}

const sidebarReducer = (state: GeneralPropsType = initialState, action: AtionCreatorType) => {
    return state
}

export default sidebarReducer