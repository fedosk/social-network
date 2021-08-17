import React, {useState} from 'react';
import style from './TextareaPosts.module.css';
import {PostsDataPropsType} from '../../../../Redux/store';

import {NewPost} from "../NewPost/NewPost";

type TextareaPostsPropsType = {
    postText: string
    postsData: Array<PostsDataPropsType>
    changePostText: (text: string) => void
    addPost: () => void
}


export const TextareaPosts: React.FC<TextareaPostsPropsType> = (props) => {

    const [error, setError] = useState<boolean>(false)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        if (newPostElement.current && newPostElement.current.value.trim() !== '') {
            props.addPost()
        } else {
            setError(true)
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.changePostText(text)
            setError(false)
        }
    }

    return (
        <>
            <div className={style.textareaWrapper}>
            <textarea
                ref={newPostElement}
                className={error ? style.errorTextarea : ''}
                name={'posts'}
                id={'posts'}
                placeholder={'What\'s new?'}
                onChange={onPostChange}
                value={props.postText}
            />
                <div className={error ? style.errorPost : style.line}>
                </div>
                <button className={style.btn} onClick={onAddPost}>Add post</button>
            </div>
            <NewPost postsData={props.postsData}/>
        </>

    )
}


