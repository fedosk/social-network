const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const DISABLE_BUTTON = 'DISABLE_BUTTON'

export type usersPropsType = {
    name: string
    id: string
    uniqueUrlName: string | null
    photos: { small: string | null, large: string | null }
    status: string | null
    followed: boolean
}

export type usersStatePropsType = {
    users: usersPropsType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

const initialState: usersStatePropsType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case DISABLE_BUTTON: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(f => f !== action.id)
            }
        }
        default:
            return state
    }
}

type UsersAtionCreatorType = ReturnType<typeof onFollow>
    | ReturnType<typeof onUnfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof changePage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setFollowingInProgress>

export const onFollow = (id: string) => ({
    type: FOLLOW,
    id
} as const)

export const onUnfollow = (id: string) => ({
    type: UNFOLLOW,
    id
} as const)

export const setUsers = (users: usersPropsType[]) => ({
    type: SET_USERS,
    users: users
} as const)

export const changePage = (currentPage: number) => ({
    type: CHANGE_PAGE,
    currentPage
} as const)

export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOOGLE_IS_FETCHING,
    isFetching
} as const)

export const setFollowingInProgress = (isFetching: boolean, id: string) => ({
    type: DISABLE_BUTTON,
    isFetching,
    id,
} as const)

export default usersReducer