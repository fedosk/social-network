import React from 'react';
import style from './ProfileUserPosts.module.css'
import {StorePropsType} from '../../../Redux/store';
import {TextareaPostsContainer} from "./Textarea/TextareaPostsContainer";

type ProfileUserPostsPropsType = {
    store: StorePropsType
}

export const ProfileUserPosts: React.FC<ProfileUserPostsPropsType> = (props) => {

    return (
        <div className={style.postsContainer}>
            <TextareaPostsContainer store={props.store}/>
        </div>
    )
}

