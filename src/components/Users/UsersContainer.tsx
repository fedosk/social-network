import React from "react";
import {AppDispatch, RootState} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {followAC, showMoreAC, unfollowAC, usersPropsType} from "../../Redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state: RootState) => {
    return {
        usersList: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        onFollow: (id: string) => {
            dispatch(followAC(id))
        },
        onUnfollow: (id: string) => {
            dispatch(unfollowAC(id))
        },
        showMore: (users: usersPropsType[]) => {
            dispatch(showMoreAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer