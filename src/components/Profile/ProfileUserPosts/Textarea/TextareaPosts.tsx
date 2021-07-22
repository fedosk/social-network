import React, {useState} from 'react';
import style from './TextareaPosts.module.css';
import {ProfilePagePropsType} from '../../../../Redux/state';

type TextareaPostsPropsType = {
    profilePage: ProfilePagePropsType
    addPost: (time: string) => void
    changeNeWPostText: (text: string) => void
}

export const TextareaPosts: React.FC<TextareaPostsPropsType> = (props) => {

    const [error, setError] = useState<boolean>(false)

    const postTime = new Date()

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        const deys = (postTime.getDay() < 10) ? (`0${postTime.getDay()}`) : (`${postTime.getDay()}`)
        const month = (postTime.getMonth() < 10) ? (`0${postTime.getMonth()}`) : (`${postTime.getMonth()}`)
        const time: string = `${deys}.${month} at ${postTime.getHours()}:${postTime.getMinutes()}`

        if (newPostElement.current && newPostElement.current.value.trim() !== '') {
            props.addPost(time)
        } else {
            setError(true)
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text =  newPostElement.current.value
            props.changeNeWPostText(text)
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


