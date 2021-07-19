import style from './NewPost.module.css';
import React from 'react';
import  { ReactComponent as Like }  from './../../../../images/like.svg'
import {PostsDataPropsType, ProfilePagePropsType} from '../../../../Redux/state';

type NewPostPropsType = {
    state: ProfilePagePropsType
}

export const NewPost: React.FC<NewPostPropsType> = (props) => {

    const post = props.state.postsData.map((p: PostsDataPropsType) =>
        <div className={style.newPostWrapper}>
            <div className={style.postUserPic}>
                <img src={p.userPic} alt={'userPic'} className={style.userPic}/>
                <div className={style.postNameWrapper}>
                    <span className={style.postUserName}>{p.name}</span>
                    <span className={style.postTime}>{p.time}</span>
                </div>
            </div>
            <span className={style.postUserContent}>{p.text}</span>
            <div className={style.likeWrapper}>
                <Like className={style.like}/>
                <div className={style.likeCount}>{p.like}</div>
            </div>
        </div>)

    return (
        <div>{post}</div>
    )
}