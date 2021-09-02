const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export type usersPropsType = {
    name: string
    id: string
    uniqueUrlName: string | null
    photos: {small: string | null, large: string | null}
    status: string | null
    followed: boolean
}

export type usersStatePropsType = {
    users: usersPropsType[]
    pageSize: number
    totalCount: number
    currentPage: number
}

const initialState: usersStatePropsType = {
    users: [ ],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
}

const usersReducer = (state: usersStatePropsType = initialState, action: UsersAtionCreatorType) => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case CHANGE_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        default:
            return state
    }
}

type UsersAtionCreatorType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof changePageAC>
    | ReturnType<typeof setTotalUsersCountAC>

export const followAC = (id: string) => ({
    type: FOLLOW,
    id
} as const)

export const unfollowAC = (id: string) => ({
    type: UNFOLLOW,
    id
} as const)

export const setUsersAC = (users: usersPropsType[]) => ({
    type: SET_USERS,
    users: users
} as const)

export const changePageAC = (currentPage: number) => ({
    type: CHANGE_PAGE,
    currentPage
} as const)

export const setTotalUsersCountAC = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)

export default usersReducer