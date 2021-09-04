import React from 'react';
import style from './ProfileUserPosts.module.css'
import {TextareaPosts} from "./Textarea/TextareaPosts";
import {PostsDataPropsType} from "../../../Redux/profile-reducer";

type ProfileUserPostsPropsType = {
    postsData: Array<PostsDataPropsType>
    postText: string
    addPost: () => void
    changePostText: (text: string) => void
}

export const ProfileUserPosts: React.FC<ProfileUserPostsPropsType>= (props) => {
    return (
        <div className={style.postsContainer}>
            <TextareaPosts postsData={props.postsData}
                           postText={props.postText}
                           addPost={props.addPost}
                           changePostText={props.changePostText}
            />
        </div>
    )
}

