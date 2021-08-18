import React from 'react';
import {addPostActionCreator, changePostTextActionCreator} from "../../../../Redux/profile-reducer";
import {TextareaPosts} from "./TextareaPosts";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../../../Redux/redux-store";

let mapStateToProps = (state: RootState) => {
    return {
        postText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}

let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        changePostText: (text: string) => {dispatch(changePostTextActionCreator(text))}
    }
}

const TextareaPostsContainer = connect(mapStateToProps, mapDispatchToProps)(TextareaPosts)

export default TextareaPostsContainer


