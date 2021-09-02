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
import axios from "axios";
import {Users} from "./Users";

type UsersPropsType = {
    usersList: Array<usersPropsType>
    pageSize: number
    totalCount: number
    currentPage: number
    onFollow: (id: string) => void
    onUnfollow: (id: string) => void
    setUsers: (users: usersPropsType[]) => void
    changePage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changePage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users usersList={this.props.usersList}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      onFollow={this.props.onFollow}
                      onUnfollow={this.props.onUnfollow}
                      changePage={this.props.changePage}
                      onPageChanged={this.onPageChanged}/>
    }
}

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer