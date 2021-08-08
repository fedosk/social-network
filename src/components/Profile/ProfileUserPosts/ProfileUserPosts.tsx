import React from 'react';
import style from './ProfileUserPosts.module.css'
import {TextareaPosts} from './Textarea/TextareaPosts';
import {NewPost} from './NewPost/NewPost';
import {AtionCreatorType, ProfilePagePropsType} from '../../../Redux/store';

type ProfileUserPostsPropsType = {
    profilePage: ProfilePagePropsType
    dispatch: (action: AtionCreatorType) => void
}

export const ProfileUserPosts: React.FC<ProfileUserPostsPropsType> = (props) => {

    return (
        <div className={style.postsContainer}>
            <TextareaPosts
                profilePage={props.profilePage}
                dispatch={props.dispatch}/>
            <NewPost state={props.profilePage}/>
        </div>
    )
}

