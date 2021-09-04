const SET_USERS_DATA = 'SET_USERS_DATA'

export type DataPropsType = {
    id: number | null
    email: string | null
    login: string | null
}

export type AuthPropsType = {
    resultCode: number
    messages: []
    data: DataPropsType
    isAuth: boolean
}

const initialState: AuthPropsType = {
    resultCode: 0,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false,
}

const authReducer = (state: AuthPropsType = initialState, action: AtionCreatorType) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {...state, data: action.userData, isAuth: true}
        }
        default:
            return state
    }
}

export type AtionCreatorType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userData: DataPropsType) => ({type: SET_USERS_DATA, userData} as const)

export default authReducer