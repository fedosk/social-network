import React from "react";
import {RootState} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
    changePage,
    onFollow,
    onUnfollow,
    setFollowingInProgress,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    usersPropsType
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {useresAPI} from "../../API/api";


type MapStateToPropsType = {
    usersList: Array<usersPropsType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

type MapDispatchToPropsType = {
    onFollow: (id: string) => void
    onUnfollow: (id: string) => void
    setUsers: (users: usersPropsType[]) => void
    changePage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setFollowingInProgress: (isFetching: boolean, id: string) => void
}

export type UsersContainerPropsType =  MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        useresAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.changePage(pageNumber)
        useresAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users usersList={this.props.usersList}
                         pageSize={this.props.pageSize}
                         totalCount={this.props.totalCount}
                         currentPage={this.props.currentPage}
                         followingInProgress={this.props.followingInProgress}
                         onFollow={this.props.onFollow}
                         onUnfollow={this.props.onUnfollow}
                         changePage={this.props.changePage}
                         onPageChanged={this.onPageChanged}
                         setFollowingInProgress={this.props.setFollowingInProgress}
                />}
        </>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        usersList: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default connect(mapStateToProps, {
    onFollow,
    onUnfollow,
    setUsers,
    changePage,
    setTotalUsersCount,
    toggleIsFetching,
    setFollowingInProgress,
})(UsersContainer)
