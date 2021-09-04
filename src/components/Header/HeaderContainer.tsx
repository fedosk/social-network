import React from 'react';
import {RootState} from "../../Redux/redux-store";
import {connect} from "react-redux";
import axios from "axios";
import {Header} from "./Header";
import {DataPropsType, setAuthUserData} from "../../Redux/auth-reducer";


export type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

export type MapDispatchToPropsType = {
    setAuthUserData: (userData: DataPropsType) => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)


