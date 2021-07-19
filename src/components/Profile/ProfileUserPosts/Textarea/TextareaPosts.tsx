import React  from 'react';
import style from './TextareaPosts.module.css';
import { ProfilePagePropsType} from '../../../../Redux/state';

type TextareaPostsPropsType = {
    state: ProfilePagePropsType
}

export const TextareaPosts: React.FC<TextareaPostsPropsType> = (props) => {

    return (
        <div className={style.textareaWrapper}>
            <textarea
                name={'posts'}
                id={'posts'}
                placeholder={'What\'s new?'}
                value={'Post'}>
            </textarea>
            <div className={style.line}>
            </div>
            <button className={style.btn}>Add post</button>
        </div>
    )
}


