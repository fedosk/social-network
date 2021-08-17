import React from 'react';
import {AtionCreatorType, RootStateTypes} from '../../../../Redux/store';
import {addPostActionCreator, changePostTextActionCreator} from "../../../../Redux/profile-reducer";
import {TextareaPosts} from "./TextareaPosts";
import {connect} from "react-redux";

let mapStateToProps = (state: RootStateTypes) => {
    return {
        postText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}

let mapDispatchToProps = (dispatch: (action: AtionCreatorType) => void) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        changePostText: (text: string) => {dispatch(changePostTextActionCreator(text))}
    }
}

const TextareaPostsContainer = connect(mapStateToProps, mapDispatchToProps)(TextareaPosts)

export default TextareaPostsContainer


