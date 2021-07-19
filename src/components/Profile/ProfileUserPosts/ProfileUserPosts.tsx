import React from 'react';
import style from './ProfileUserPosts.module.css'
import {TextareaPosts} from './Textarea/TextareaPosts';
import {NewPost} from './NewPost/NewPost';
import {ProfilePagePropsType} from '../../../Redux/state';

type ProfileUserPostsPropsType = {
    state: ProfilePagePropsType
}

export const ProfileUserPosts: React.FC<ProfileUserPostsPropsType> = (props) => {

    return (
        <div className={style.postsContainer}>
            <TextareaPosts state={props.state}/>
            <NewPost state={props.state}/>
        </div>
    )
}

