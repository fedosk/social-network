import React from "react";
import {AppDispatch, RootState} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
    changePageAC,
    followAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersPropsType
} from "../../Redux/users-reducer";
import {UsersC} from "./UsersC";

let mapStateToProps = (state: RootState) => {
    return {
        usersList: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        setUsers: (users: usersPropsType[]) => {
            dispatch(setUsersAC(users))
        },
        changePage: (currentPage: number) => {
            dispatch(changePageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer