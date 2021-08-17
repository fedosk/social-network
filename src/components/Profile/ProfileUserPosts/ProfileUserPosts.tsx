import React from 'react';
import style from './ProfileUserPosts.module.css'
import TextareaPostsContainer from "./Textarea/TextareaPostsContainer";



export const ProfileUserPosts: React.FC= (props) => {

    return (
        <div className={style.postsContainer}>
            <TextareaPostsContainer/>
        </div>
    )
}

