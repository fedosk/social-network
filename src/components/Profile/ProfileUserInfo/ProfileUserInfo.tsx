import React from 'react';
import style from './ProfileUserInfo.module.css';

export const ProfileUserInfo = () => {
    return (
        <article className={style.wrapper}>
            <div className={style.userImg}>
            </div>
            <div className={style.infoWrapper}>
                <span className={style.name}>Eduard Fedosevich</span>
                <div className={style.info}>
                    <span className={style.birthDate}>Date of Birth: 14 Dec 1996</span>
                    <span className={style.city}>City: Minsk</span>
                    <span className={style.education}>Education: BNTU</span>
                    <span className={style.website}>VK: https://vk.com</span>
                </div>
            </div>
        </article>
    )
}