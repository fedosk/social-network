import React from 'react';
import {ProfileHeader} from './ProfileHeader/ProfileHeader';
import {ProfileUserInfo} from './ProfileUserInfo/ProfileUserInfo';
import {ProfileUserPosts} from './ProfileUserPosts/ProfileUserPosts';
import style from './Profile.module.css'


export const Profile: React.FC = (props) => {
    return (
        <section className={style.profileSection}>
            <div className={style.profileWrapper}>
                <ProfileHeader/>
                <ProfileUserInfo/>
                <ProfileUserPosts/>
            </div>
        </section>
    )
}


