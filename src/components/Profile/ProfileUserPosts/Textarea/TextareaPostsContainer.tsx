import React from 'react';
import {StorePropsType} from '../../../../Redux/store';
import {addPostActionCreator, changePostTextActionCreator} from "../../../../Redux/profile-reducer";
import {TextareaPosts} from "./TextareaPosts";

type TextareaPostsPropsType = {
    store: StorePropsType
}

export const TextareaPostsContainer: React.FC<TextareaPostsPropsType> = ({store}) => {

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    const postChange = (text: string) => {
        store.dispatch(changePostTextActionCreator(text))
    }

    return (
        <>
            <TextareaPosts addPost={addPost} changePostText={postChange}
                           postText={store.getState().profilePage.newPostText}
                           postsData={store.getState().profilePage.postsData}/></>
    )
}


