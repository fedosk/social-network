import React, {useState} from 'react';
import style from './TextareaPosts.module.css';
import {AtionCreatorType, ProfilePagePropsType} from '../../../../Redux/store';
import {addPostActionCreator, changePostTextActionCreator} from "../../../../Redux/profile-reducer";

type TextareaPostsPropsType = {
    profilePage: ProfilePagePropsType
    dispatch: (action: AtionCreatorType) => void
}


export const TextareaPosts: React.FC<TextareaPostsPropsType> = (props) => {

    const [error, setError] = useState<boolean>(false)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current && newPostElement.current.value.trim() !== '') {
            props.dispatch(addPostActionCreator())
        } else {
            setError(true)
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.dispatch(changePostTextActionCreator(text))
            setError(false)
        }
    }

    return (
        <div className={style.textareaWrapper}>
            <textarea
                ref={newPostElement}
                className={error ? style.errorTextarea : ''}
                name={'posts'}
                id={'posts'}
                placeholder={'What\'s new?'}
                onChange={onPostChange}
                value={props.profilePage.newPostText}
            />
            <div className={error ? style.errorPost : style.line}>
            </div>
            <button className={style.btn} onClick={addPost}>Add post</button>
        </div>
    )
}


