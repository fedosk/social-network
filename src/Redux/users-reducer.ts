import {v1} from "uuid";
import UserImg from "../images/userpic.png";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type locationPropsType = {
    city: string,
    country: string
}

export type usersPropsType = {
    id: string
    follow: boolean
    name: string
    userPic: string
    status: string
    location: locationPropsType
}

export type usersStatePropsType = {
    users: Array<usersPropsType>
}

const initialState: usersStatePropsType = {
    users: [
        {
            id: v1(),
            follow: true,
            name: 'Sergej Orda',
            userPic: UserImg,
            status: 'I\'m looking for a job',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            follow: false,
            name: 'Danil Pleshko',
            userPic: UserImg,
            status: 'I\'m looking for a job',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            follow: false,
            name: 'Anton Kasian',
            userPic: UserImg,
            status: 'I\'m looking for a job',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            follow: false,
            name: 'Ivan Ilkovskiy',
            userPic: UserImg,
            status: 'I\'m looking for a job',
            location: {city: 'Minsk', country: 'Belarus'}
        }
    ]
}

const usersReducer = (state: usersStatePropsType = initialState, action: UsersAtionCreatorType) => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, follow: true} : u)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, follow: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

type UsersAtionCreatorType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof showMoreAC>

export const followAC = (id: string) => ({
    type: FOLLOW,
    id
} as const)

export const unfollowAC = (id: string) => ({
    type: UNFOLLOW,
    id
} as const)

export const showMoreAC = (users: usersPropsType[]) => ({
    type: SET_USERS,
    users: users
} as const)

export default usersReducer