import React from 'react';
import style from './ProfileUserPosts.module.css'
import {TextareaPosts} from './Textarea/TextareaPosts';
import {NewPost} from './NewPost/NewPost';
import {addPost, changeNeWPostText, ProfilePagePropsType} from '../../../Redux/state';

type ProfileUserPostsPropsType = {
    profilePage: ProfilePagePropsType
    addPost: (time: string) => void
    changeNeWPostText: (text: string) => void

}

export const ProfileUserPosts: React.FC<ProfileUserPostsPropsType> = (props) => {

    return (
        <div className={style.postsContainer}>
            <TextareaPosts
                profilePage={props.profilePage}
                addPost={addPost}
                changeNeWPostText={changeNeWPostText}/>
            <NewPost state={props.profilePage}/>
        </div>
    )
}

