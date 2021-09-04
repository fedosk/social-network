import React from 'react';
import {Profile} from "./Profile";
import {RootState} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {addPost, changePostText, setUserInfo, PostsDataPropsType, UserInfoPropsType} from "../../Redux/profile-reducer";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";

type WithRouterPropsType ={
    userId: string
}

type MapStateToPropsType = {
    userInfo: UserInfoPropsType
    postsData: Array<PostsDataPropsType>
    postText: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    changePostText: (text: string) => void
    setUserInfo: (userInfo: UserInfoPropsType) => void
}


export type ProfileContainerPropsType =  MapStateToPropsType & MapDispatchToPropsType


type PropsType = RouteComponentProps<WithRouterPropsType> & ProfileContainerPropsType


export class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) userId = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserInfo(response.data)
            })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        userInfo: state.profilePage.userInfo,
        postsData: state.profilePage.postsData,
        postText: state.profilePage.postText
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {addPost, changePostText, setUserInfo})(withUrlDataContainerComponent)


